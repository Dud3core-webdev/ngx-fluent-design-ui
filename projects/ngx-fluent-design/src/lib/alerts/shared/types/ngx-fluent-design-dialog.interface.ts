import { EventEmitter } from '@angular/core';
import { INgxFluentDesignIcon } from '../../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignDialogHandler } from '../../dialog/dialog-handler.helper';

export interface INgxFluentDesignDialog {
    displayCloseIcon: boolean;
    primaryActionName: string;
    secondaryActionName: string;
    header: string;
    outsideSheetCanDismissContent: boolean;
    dialogHandler: NgxFluentDesignDialogHandler;

    readonly primaryActionClicked: EventEmitter<void>;
    readonly secondaryActionClicked: EventEmitter<void>;
    readonly sheetDismissClicked: EventEmitter<void>;
    readonly closeIcon: INgxFluentDesignIcon;
}
