import { INgxFluentDesignSurfaceComponentHandler } from './ngx-fluent-design-surface-component-handler.interface';
import { EventEmitter } from '@angular/core';

export interface INgxFluentDesignSurface {
    handler: INgxFluentDesignSurfaceComponentHandler;
    canDismissWithOuterContent: boolean;

    readonly componentClosed: EventEmitter<void>;
    handleCloseClickEvent(): void;
}
