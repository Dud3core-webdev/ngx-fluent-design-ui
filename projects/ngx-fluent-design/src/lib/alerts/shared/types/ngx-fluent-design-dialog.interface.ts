import { EventEmitter } from '@angular/core';
import { INgxFluentDesignIcon } from '../../../icons/shared/types/ngx-fluent-design-icon.interface';

export interface INgxFluentDesignDialog {
    displaySecondaryAction: boolean;
    displayCloseIcon: boolean;
    primaryActionName: string;
    secondaryActionName: string;
    header: string;

    readonly primaryActionClicked: EventEmitter<void>;
    readonly secondaryActionClicked: EventEmitter<void>;
    readonly closeIconClicked: EventEmitter<void>;
    readonly closeIcon: INgxFluentDesignIcon;
}
