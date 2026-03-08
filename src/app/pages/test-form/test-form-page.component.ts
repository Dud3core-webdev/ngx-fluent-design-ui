import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of, throwError, timer } from 'rxjs';
import { NgxFluentDesignDialogHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/dialog/dialog-handler.helper';
import { switchMap } from 'rxjs/operators';
import { NgxFluentDesignMessageBarHandler } from '../../../../projects/ngx-fluent-design/src/lib/notifications/message-bar/message-bar-handler.helper';
import { NgxFluentDesignMessageBarComponent } from '../../../../projects/ngx-fluent-design/src/lib/notifications/message-bar/ngx-fluent-design-message-bar.component';
import { NgxFluentDesignDialogComponent } from '../../../../projects/ngx-fluent-design/src/lib/surface/dialog/ngx-fluent-design-dialog.component';
import { NgxFluentDesignToggleComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/toggle/ngx-fluent-design-toggle.component';
import { NgxFluentDesignCardComponent } from '../../../../projects/ngx-fluent-design/src/lib/surface/card/ngx-fluent-design-card.component';
import { NgxFluentDesignFormFieldUnderlinedComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/text-field-underlined/ngx-fluent-design-text-field-underlined.component';
import { NgxFluentDesignInputClassValidatorDirective } from '../../../../projects/ngx-fluent-design/src/lib/input/shared/directives/ngx-fluent-design-input-class-validator.directive';
import { NgxFluentDesignRadioComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/radio/ngx-fluent-design-radio.component';
import { NgxFluentDesignCheckboxComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/checkbox/ngx-fluent-design-checkbox.component';
import { NgxFluentDesignCompoundButtonComponent } from '../../../../projects/ngx-fluent-design/src/lib/cta/compound-button/ngx-fluent-design-compound-button.component';
import { JsonPipe } from '@angular/common';
import { NgxFluentDesignSpinnerComponent } from '../../../../projects/ngx-fluent-design/src/lib/progress/spinner/ngx-fluent-design-spinner.component';

@Component({
    templateUrl: './test-form-page.component.html',
    styleUrls: ['./test-form-page.component.scss'],
    imports: [NgxFluentDesignMessageBarComponent, NgxFluentDesignDialogComponent, NgxFluentDesignToggleComponent, NgxFluentDesignCardComponent, FormsModule, ReactiveFormsModule, NgxFluentDesignFormFieldUnderlinedComponent, NgxFluentDesignInputClassValidatorDirective, NgxFluentDesignRadioComponent, NgxFluentDesignCheckboxComponent, NgxFluentDesignCompoundButtonComponent, NgxFluentDesignSpinnerComponent, JsonPipe]
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
