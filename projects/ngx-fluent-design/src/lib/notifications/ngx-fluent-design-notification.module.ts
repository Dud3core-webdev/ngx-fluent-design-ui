import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignMessageBarComponent } from './message-bar/ngx-fluent-design-message-bar.component';
import { NgxFluentDesignCtaModule } from '../cta/ngx-fluent-design-cta.module';

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
