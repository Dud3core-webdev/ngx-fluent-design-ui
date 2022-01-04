import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    template: `
        <form [formGroup]="reactiveFormGroup">
            <ngx-fluent-design-standard-input>
                <input ngxFluentDesignInput formControlName="standardInput">
            </ngx-fluent-design-standard-input>
        </form>
    `,
})
export class ReactveFormsUsageExample {
    public reactiveFormGroup: FormGroup = new FormGroup({
        standardInput: new FormControl(null),
        textArea: new FormControl(null)
    });
}
