import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-form-field [label]="'Standard Input'">
                <input ngxFluentDesignInput [formControl]="standardInput">
            </ngx-fluent-design-form-field>
        </form>
    `,
})
export class ReactveFormsUsageExample {
    public standardInput: FormControl = new FormControl(null);
}
