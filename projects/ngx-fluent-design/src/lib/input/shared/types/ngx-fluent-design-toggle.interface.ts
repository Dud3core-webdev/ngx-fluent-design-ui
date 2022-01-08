import { EventEmitter } from '@angular/core';

export interface INgxFluentDesignToggle {
    label: string;
    inlineLabel: boolean;
    toggled: boolean;
    disabled: boolean;

    readonly changeEvent: EventEmitter<void>;
    readonly toggleOnEvent: EventEmitter<void>;
    readonly toggleOffEvent: EventEmitter<void>;
    
    toggle(): void;
}
