import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignSheetComponent } from './sheet/ngx-fluent-design-sheet.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignSheetComponent
];

@NgModule({
    imports: [CommonModule],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignCommonComponentsModule {}
