import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignSpinnerComponent } from './spinner/ngx-fluent-design-spinner.component';
import { NgxFluentDesignProgressIndicatorComponent } from './progress-indicator/ngx-fluent-design-progress-indicator.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignSpinnerComponent,
    NgxFluentDesignProgressIndicatorComponent
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
