import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NgxFluentDesignPanelComponent } from './panel/ngx-fluent-design-panel.component';
import { NgxFluentDesignIconModule } from '../icons/ngx-fluent-design-icon.module';
import { NgxFluentDesignSheetComponent } from './sheet/ngx-fluent-design-sheet.component';
import { NgxFluentDesignCardComponent } from './card/ngx-fluent-design-card.component';
import { NgxFluentDesignModalComponent } from './modal/ngx-fluent-design-modal.component';
import { NgxFluentDesignDialogComponent } from './dialog/ngx-fluent-design-dialog.component';
import { NgxFluentDesignCtaModule } from '../cta/ngx-fluent-design-cta.module';
import { colorsHexToRgbFactory } from './bootstrap/colors-hex-to-rgb.factory';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignPanelComponent,
    NgxFluentDesignSheetComponent,
    NgxFluentDesignCardComponent,
    NgxFluentDesignModalComponent,
    NgxFluentDesignDialogComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignIconModule,
        NgxFluentDesignCtaModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: () => colorsHexToRgbFactory,
            multi: true
        }
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignSurfaceModule {
}
