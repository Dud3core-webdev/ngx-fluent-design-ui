import { INgxFluentDesignComponentHandler } from '../../common/types/ngx-fluent-design-component-handler.interface';
import { EventEmitter } from '@angular/core';

export interface INgxFluentDesignSurface {
    handler: INgxFluentDesignComponentHandler;
    canDismissWithOuterContent: boolean;

    readonly componentClosed: EventEmitter<void>;
    handleCloseClickEvent(): void;
}
