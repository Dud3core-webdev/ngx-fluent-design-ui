import { EventEmitter } from '@angular/core';
import { NgxFluentDesignCtaType } from './cta.type';
import { NgxFluentDesignSlotNames } from '../../types/theme-names.type';

export interface INgxFluentDesignCta {
    disabled: boolean;
    type: NgxFluentDesignCtaType;
    slotName: NgxFluentDesignSlotNames;
    clicked: EventEmitter<void>;
    secondaryText?: string;
    onClicked(): void;
}
