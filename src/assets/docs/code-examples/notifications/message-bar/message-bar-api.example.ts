import { EventEmitter } from '@angular/core';

declare type MessageBarType = 'info' | 'error' | 'blocked' | 'severe-warning' | 'success' | 'warning';

export interface INgxFluentDesignMessageBar {
    messageBarType: MessageBarType;
    multiLine: boolean;
    displayActions: boolean;
    canDismiss: boolean;
    actionName: string;
    actionClicked: EventEmitter<void>;
    closeClicked: EventEmitter<void>;
}
