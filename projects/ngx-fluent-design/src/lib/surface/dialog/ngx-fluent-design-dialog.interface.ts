import { EventEmitter, Input } from '@angular/core';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { INgxFluentDesignSurface } from '../types/ngx-fluent-design-surface.interface';

export interface INgxFluentDesignDialog extends INgxFluentDesignSurface {
    displayCloseIcon: boolean;
    primaryActionName: string;
    header: string;
    shouldDisplaySecondaryAction: boolean;

    readonly primaryActionClicked: EventEmitter<void>;
    readonly secondaryActionClicked: EventEmitter<void>;
    readonly closeIcon: INgxFluentDesignIcon;
}
