import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignPanelComponent } from './panel/ngx-fluent-design-panel.component';
import { NgxFluentDesignIconModule } from '../icons/ngx-fluent-design-icon.module';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignPanelComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignIconModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignPanelModule {
}
