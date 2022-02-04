import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignSheetComponent } from './sheet/ngx-fluent-design-sheet.component';
import { NgxFluentDesignCardComponent } from './card/ngx-fluent-design-card.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignSheetComponent,
    NgxFluentDesignCardComponent
];

@NgModule({
    imports: [CommonModule],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignCommonComponentsModule {}
