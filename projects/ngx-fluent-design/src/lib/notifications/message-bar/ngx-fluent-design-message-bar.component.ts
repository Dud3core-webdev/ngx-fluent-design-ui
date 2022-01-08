import { Component, Input } from '@angular/core';
import { INgxFluentDesignMessageBar, MessageBarType } from '../shared/types/ngx-fluent-design-message-bar.interface';

@Component({
    selector: 'ngx-fluent-design-message-bar',
    templateUrl: './ngx-fluent-design-message-bar.component.html',
    styleUrls: ['./ngx-fluent-design-message-bar.component.scss']
})
export class NgxFluentDesignMessageBarComponent implements INgxFluentDesignMessageBar {
    @Input() public displayActions: boolean;
    @Input() public messageBarType: MessageBarType = 'info';
    @Input() public multiLine: boolean;

    public get canDisplayActionBar(): boolean {
        return true;
    }

    public logoUrl(): string {
        switch (this.messageBarType) {
            case 'info':
                console.log('Yeah bwoi')
                return '../shared/assets/img/string-icon-info-warn.svg';
        }
    }

}
