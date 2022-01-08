import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignMessageBarComponent } from './message-bar/ngx-fluent-design-message-bar.component';
import { NgxFluentDesignCtaModule } from 'ngx-fluent-design';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignMessageBarComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignCtaModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS],
})
export class NgxFluentDesignNotificationModule {}
