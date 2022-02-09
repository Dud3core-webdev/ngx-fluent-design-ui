import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './test-form-page.component.html',
    styleUrls: ['./test-form-page.component.scss']
})
export class TestFormPageComponent {
    public hasSubmissionError: boolean = false;
    public formGroup: FormGroup;

    constructor() {
        this.formGroup = new FormGroup({
            firstName: new FormControl(null, [Validators.required]),
            lastName: new FormControl(null, [Validators.required])
        });
    }

    public toggleHasSubmissionError(): void {
        this.hasSubmissionError = !this.hasSubmissionError;
    }
}
