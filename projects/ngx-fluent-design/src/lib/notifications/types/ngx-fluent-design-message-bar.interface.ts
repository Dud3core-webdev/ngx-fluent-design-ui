import { EventEmitter, Input, Output } from '@angular/core';
import { MessageBarType } from './message-bar.type';
import { NgxFluentDesignMessageBarHandler } from '../message-bar/message-bar-handler.helper';

export interface INgxFluentDesignMessageBar {
    messageBarType: MessageBarType;
    canDismiss: boolean;
    fixed: boolean;
    handler: NgxFluentDesignMessageBarHandler;
    readonly actionClicked: EventEmitter<void>;
    readonly closeClicked: EventEmitter<void>;
}
