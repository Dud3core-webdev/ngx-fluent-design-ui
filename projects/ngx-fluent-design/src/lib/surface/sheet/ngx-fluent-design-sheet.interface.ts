import { INgxFluentDesignSurface } from '../types/ngx-fluent-design-surface.interface';
import { NgxFluentDesignSheetContentAlignment } from './ngx-fluent-design-sheet.component';

export interface INgxFluentDesignSheet extends INgxFluentDesignSurface {
    alignContent: NgxFluentDesignSheetContentAlignment;
}
