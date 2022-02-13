import { EventEmitter } from '@angular/core';
import { NgxFluentDesignModalHandler } from '../../modal/modal-handler.helper';

export interface INgxFluentDesignModalComponent {
    outsideSheetCanDismissContent: boolean;
    modalHandler: NgxFluentDesignModalHandler;

    readonly sheetDismissClicked: EventEmitter<void>;
}
