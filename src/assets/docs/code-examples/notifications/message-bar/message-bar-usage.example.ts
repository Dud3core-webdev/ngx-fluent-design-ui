import { Component } from '@angular/core';

@Component({
    template: `
        <ngx-fluent-design-message-bar
            messageBarType="warning">
            This is some example text
        </ngx-fluent-design-message-bar>

        <ngx-fluent-design-message-bar
            messageBarType="warning"
            [displayActions]="true"
            [actionName]="'some action name'"
            [canDismiss]="true"
            [multiLine]="true">
            This is some example text
        </ngx-fluent-design-message-bar>
    `
})
export class MessageBarUsageExample {}
