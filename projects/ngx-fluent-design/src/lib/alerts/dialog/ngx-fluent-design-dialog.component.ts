import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignIconClearClose } from '../../icons/shared/constants/ngx-fluent-design-icons-list';

@Component({
    selector: 'ngx-fluent-design-dialog',
    templateUrl: './ngx-fluent-design-dialog.component.html',
    styleUrls: ['./ngx-fluent-design-dialog.component.scss']
})
export class NgxFluentDesignDialogComponent {
    @Input() public displaySecondaryAction: boolean = true;
    @Input() public primaryActionName: string = 'Primary Action';
    @Input() public secondaryActionName: string = 'Secondary Action';

    @Output() public primaryActionClicked: EventEmitter<void> = new EventEmitter<void>();
    @Output() public secondaryActionClicked: EventEmitter<void> = new EventEmitter<void>();

    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;
}
