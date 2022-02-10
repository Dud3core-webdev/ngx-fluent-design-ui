import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
    templateUrl: './test-form-page.component.html',
    styleUrls: ['./test-form-page.component.scss']
})
export class TestFormPageComponent {
    public hasSubmissionError: boolean = false;
    public showModal: boolean = false;
    public showLoadingSpinner: boolean = false;
    public displayErrorSubmission: boolean = false;
    displaySuccessSubmission: boolean = false;

    public formGroup: FormGroup;

    constructor() {
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

    public toggleConfirmModal(): void {
        this.showModal = !this.showModal;
    }

    public submitForm(): void {
        this.showLoadingSpinner = true;
        this.toggleConfirmModal();
        timer(10000)
            .subscribe(() => {
                this.formGroup.reset({
                    marketingConsent: false
                });
                this.showLoadingSpinner = false;
                if (this.hasSubmissionError) {
                   this.displayErrorSubmission = true;
                } else {
                    this.displaySuccessSubmission = true;
                }
            });
    }

    public cancelFormSubmission(): void {
        this.toggleConfirmModal();
        this.formGroup.reset({
            marketingConsent: false
        });
    }
}
