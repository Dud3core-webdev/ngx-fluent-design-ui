import { Component, Input } from '@angular/core';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignIconClearClose } from '../../icons/shared/constants/ngx-fluent-design-icons-list';
import { NgxFluentDesignPanelHandler } from './panel-handler.helper';

@Component({
    selector: 'ngx-fluent-design-panel',
    templateUrl: './ngx-fluent-design-panel.component.html',
    styleUrls: ['./ngx-fluent-design-panel.component.scss']
})
export class NgxFluentDesignPanelComponent {
    @Input() public displayCloseIcon: boolean = true;
    @Input() public header: string;
    @Input() public handler: NgxFluentDesignPanelHandler = new NgxFluentDesignPanelHandler(false);

    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;
}
