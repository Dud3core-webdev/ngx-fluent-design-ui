import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignSpinnerComponent } from './spinner/ngx-fluent-design-spinner.component';
import { NgxFluentDesignProgressIndicatorComponent } from './progress-indicator/ngx-fluent-design-progress-indicator.component';
import { NgxFluentDesignProgressIndicatorIndeterminateComponent } from './progress-indicator-indeterminate/ngx-fluent-design-progress-indicator-indeterminate.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignSpinnerComponent,
    NgxFluentDesignProgressIndicatorComponent,
    NgxFluentDesignProgressIndicatorIndeterminateComponent
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
