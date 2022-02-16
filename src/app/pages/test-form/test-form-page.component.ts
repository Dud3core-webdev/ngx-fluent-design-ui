import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, throwError, timer } from 'rxjs';
import { NgxFluentDesignDialogHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/dialog/dialog-handler.helper';
import { switchMap } from 'rxjs/operators';
import { NgxFluentDesignMessageBarHandler } from '../../../../projects/ngx-fluent-design/src/lib/notifications/message-bar/message-bar-handler.helper';

@Component({
    templateUrl: './test-form-page.component.html',
    styleUrls: ['./test-form-page.component.scss']
})
export class TestFormPageComponent {
    public hasSubmissionError: boolean = false;
    public showLoadingSpinner: boolean = false;
    public displayErrorSubmission: boolean = false;
    public dialogHandler: NgxFluentDesignDialogHandler;
    public errorMessageHandler: NgxFluentDesignMessageBarHandler = new NgxFluentDesignMessageBarHandler(false);
    public successMessageHandler: NgxFluentDesignMessageBarHandler = new NgxFluentDesignMessageBarHandler(false);
    displaySuccessSubmission: boolean = false;

    public formGroup: FormGroup;

    constructor() {
        this.dialogHandler = new NgxFluentDesignDialogHandler(false);
        this.formGroup = new FormGroup({
            firstName: new FormControl(null, [Validators.required]),
            lastName: new FormControl(null, [Validators.required]),
            favouriteGame: new FormControl(null, [Validators.required]),
            marketingConsent: new FormControl(false, [Validators.required])
        });
    }

    public toggleHasSubmissionError(): void {
        this.hasSubmissionError = !this.hasSubmissionError;
    }

    public submitForm(): void {
        this.displayErrorSubmission = false;
        this.displaySuccessSubmission = false;
        this.showLoadingSpinner = true;
        this.dialogHandler.close();
        timer(10000)
            .pipe(
                switchMap((): Observable<boolean | never> => {
                    if (this.hasSubmissionError === true) {
                        return throwError('Lol');
                    }

                    return of(true);
                })
            )
            .subscribe({
                next: () => {
                    this.formGroup.reset({
                        marketingConsent: false
                    });
                    this.displaySuccessSubmission = true;
                    this.showLoadingSpinner = false;
                    this.successMessageHandler.open();
                },
                error: () => {
                    this.displayErrorSubmission = true;
                    this.showLoadingSpinner = false;
                    this.errorMessageHandler.open();
                }
            });
    }

    public cancelFormSubmission(): void {
        this.dialogHandler.close();
        this.formGroup.reset({
            marketingConsent: false
        });
    }
}
