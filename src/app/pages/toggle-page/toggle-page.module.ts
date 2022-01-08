import { NgModule } from '@angular/core';
import { TogglePageComponent } from './toggle-page.component';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { NgxFluentDesignInputModule } from '../../../../projects/ngx-fluent-design/src/lib/input/ngx-fluent-design-input.module';
import { NgxFluentDesignCardModule } from '../../../../projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';

const DECLARATIONS: Array<any> = [
    TogglePageComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedComponentsModule,
        NgxFluentDesignInputModule,
        NgxFluentDesignCardModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class TogglePageModule {}
