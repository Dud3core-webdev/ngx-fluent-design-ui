import { EventEmitter } from '@angular/core';
import { MessageBarType } from '../../../shared/types/message-bar.type';

export interface INgxFluentDesignMessageBar {
    messageBarType: MessageBarType;
    multiLine: boolean;
    displayActions: boolean;
    canDismiss: boolean;
    actionName: string;
    actionClicked: EventEmitter<void>;
    closeClicked: EventEmitter<void>;
}
