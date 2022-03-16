import { EventEmitter } from '@angular/core';

export interface INgxFluentDesignCommandComponent {
    isChecked: boolean;
    readonly onChecked: EventEmitter<void>;
}
