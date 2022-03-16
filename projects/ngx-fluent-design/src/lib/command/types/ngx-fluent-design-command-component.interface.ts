import { EventEmitter } from '@angular/core';

export interface INgxFluentDesignCommandComponent {
    isChecked: boolean;
    commandName: string;
    readonly onChecked: EventEmitter<void>;
}
