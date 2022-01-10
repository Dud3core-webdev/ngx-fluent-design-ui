import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-form-field [label]="'Standard Input'">
                <input ngxFluentDesignInput [formControl]="standardInputValidator">
            </ngx-fluent-design-form-field>
        </form>
    `,
})
export class ReactveFormsUsageExample {
    public standardInputValidator: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)]);
}
