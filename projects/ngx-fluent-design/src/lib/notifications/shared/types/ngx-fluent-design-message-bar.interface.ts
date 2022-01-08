import { EventEmitter } from '@angular/core';

export interface INgxFluentDesignMessageBar {
    messageBarType: MessageBarType;
    multiLine: boolean;
    displayActions: boolean;
    canDismiss: boolean;
    actionName: string;
    actionClicked: EventEmitter<void>;
    closeClicked: EventEmitter<void>;
}

export declare type MessageBarType = 'info' | 'error' | 'blocked' | 'severe-warning' | 'success' | 'warning';
