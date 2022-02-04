import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignPanelComponent } from './panel/ngx-fluent-design-panel.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignPanelComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignPanelModule {
}
