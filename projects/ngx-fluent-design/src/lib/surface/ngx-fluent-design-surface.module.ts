import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignPanelComponent } from './panel/ngx-fluent-design-panel.component';
import { NgxFluentDesignIconModule } from '../icons/ngx-fluent-design-icon.module';
import { NgxFluentDesignSheetComponent } from './sheet/ngx-fluent-design-sheet.component';
import { NgxFluentDesignCardComponent } from './card/ngx-fluent-design-card.component';
import { NgxFluentDesignModalComponent } from './modal/ngx-fluent-design-modal.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignPanelComponent,
    NgxFluentDesignSheetComponent,
    NgxFluentDesignCardComponent,
    NgxFluentDesignModalComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignIconModule,
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignSurfaceModule {
}
