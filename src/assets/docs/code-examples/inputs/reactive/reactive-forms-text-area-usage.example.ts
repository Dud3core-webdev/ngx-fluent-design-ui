import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-form-field [label]="'standard Input'">
                <textarea ngxFluentDesignInput placeholder="this is a standard text area" rows="5" [formControl]="textAreaInput"></textarea>
            </ngx-fluent-design-form-field>
        </form>
    `,
})
export class ReactveFormsUsageExample {
    public textAreaInput: FormControl = new FormControl(null);
}
