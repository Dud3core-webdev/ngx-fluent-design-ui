export interface INgxFluentDesignMessageBar {
    messageBarType: MessageBarType;
    multiLine: boolean;
    displayActions: boolean;
}

export declare type MessageBarType = 'info' | 'error' | 'blocked' | 'server-warning' | 'success' | 'warning';
