import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignCommandStackComponent } from './command-stack/ngx-fluent-design-command-stack.component';
import { NgxFluentDesignPivotComponent } from './pivot/ngx-fluent-design-pivot.component';
import { NgxFluentDesignTabComponent } from './tab/ngx-fluent-design-tab.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignCommandStackComponent,
    NgxFluentDesignPivotComponent,
    NgxFluentDesignTabComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignCommandModule {}
