import { Component } from '@angular/core';

@Component({
    template: `
        <ngx-fluent-design-compound-button
            [disabled]="false"
            [secondaryText]="'And some secondary text'"
            type="primary">
            This is an example
        </ngx-fluent-design-compound-button>
    `
})
export class CompoundCtaUsageExample {}
