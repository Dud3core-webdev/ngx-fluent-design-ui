import { Component } from '@angular/core';
import { MessageBarType } from 'projects/ngx-fluent-design/src/lib/notifications/types/message-bar.type';
import { NgxFluentDesignMessageBarHandler } from '../../../../projects/ngx-fluent-design/src/lib/notifications/message-bar/message-bar-handler.helper';

@Component({
    templateUrl: './desktop-test.page.component.html',
    styleUrls: ['./desktop-test.page.component.scss']
})
export class DesktopTestPageComponent {
    public progressIndicatorCurrentValue: number = 0;
    public messageBarHandler: NgxFluentDesignMessageBarHandler = new NgxFluentDesignMessageBarHandler(false);
    public messageBarType: MessageBarType = 'success';

    public setMessageBarType(messageBarType: MessageBarType): void {
        if (this.messageBarHandler.isOpen) {
            this.messageBarHandler.close();
        }

        this.messageBarType = messageBarType;
        this.messageBarHandler.open();
    }
}
