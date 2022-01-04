import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './inputs-page.component.html',
    styleUrls: ['./inputs-page.component.scss']
})
export class InputsPageComponent {
    public testFormGroup: FormGroup = new FormGroup({
        standardInput: new FormControl(null, [Validators.required, Validators.minLength(12)]),
        standardTextArea: new FormControl(null, [Validators.required])
    });
}
