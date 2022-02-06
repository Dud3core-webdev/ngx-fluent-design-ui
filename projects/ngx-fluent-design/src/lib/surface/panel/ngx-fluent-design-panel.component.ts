import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignIconClearClose } from '../../icons/shared/constants/ngx-fluent-design-icons-list';

@Component({
    selector: 'ngx-fluent-design-panel',
    templateUrl: './ngx-fluent-design-panel.component.html',
    styleUrls: ['./ngx-fluent-design-panel.component.scss']
})
export class NgxFluentDesignPanelComponent {
    @Input() public displayCloseIcon: boolean = true;
    @Input() public header: string;

    @Output() public readonly closeIconClicked: EventEmitter<void> = new EventEmitter<void>();

    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;
}
