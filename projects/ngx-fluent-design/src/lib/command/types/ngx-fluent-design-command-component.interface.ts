import { EventEmitter } from '@angular/core';

export interface INgxFluentDesignCommandComponent {
    isChecked: boolean;
    commandName: string;
    readonly checked: EventEmitter<void>;
}
