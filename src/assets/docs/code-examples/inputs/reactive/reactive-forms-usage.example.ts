import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-standard-input [label]="'Standard Input'">
                <input ngxFluentDesignInput [formControl]="standardInput">
            </ngx-fluent-design-standard-input>
        </form>
    `,
})
export class ReactveFormsUsageExample {
    public standardInput: FormControl = new FormControl(null);
}