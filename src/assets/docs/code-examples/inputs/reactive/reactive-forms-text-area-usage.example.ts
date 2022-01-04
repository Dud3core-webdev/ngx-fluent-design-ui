import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    template: `
        <form>
            <ngx-fluent-design-standard-input [label]="'standard Input'">
                <textarea ngxFluentDesignInput placeholder="this is a standard text area" rows="5" [formControl]="textAreaInput"></textarea>
            </ngx-fluent-design-standard-input>
        </form>
    `,
})
export class ReactveFormsUsageExample {
    public textAreaInput: FormControl = new FormControl(null);
}
