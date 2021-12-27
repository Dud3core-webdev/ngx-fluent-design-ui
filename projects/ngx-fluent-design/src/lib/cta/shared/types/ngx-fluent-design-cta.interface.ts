import { EventEmitter } from '@angular/core';

export interface INgxFluentDesignCta {
    disabled: boolean;
    type: NgxFluentDesignCtaType;
    clicked: EventEmitter<void>;
    secondaryText?: string;
    onClicked(): void;
}

export declare type NgxFluentDesignCtaType = 'standard' | 'primary';
