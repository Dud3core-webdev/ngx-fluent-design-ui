import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignSpinnerComponent } from './spinner/ngx-fluent-design-spinner.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignSpinnerComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignProgressModule {
}
