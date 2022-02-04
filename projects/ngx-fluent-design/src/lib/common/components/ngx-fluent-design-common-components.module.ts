import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignSheetComponent } from './sheet/ngx-fluent-design-sheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignSheetComponent
];

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignCommonComponentsModule {}
