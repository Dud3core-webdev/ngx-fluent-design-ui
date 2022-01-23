import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignMessageBarComponent } from './message-bar/ngx-fluent-design-message-bar.component';
import { NgxFluentDesignCtaModule } from '../cta/ngx-fluent-design-cta.module';
import { NgxFluentDesignIconModule } from '../icons/ngx-fluent-design-icon.module';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignMessageBarComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignIconModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS],
})
export class NgxFluentDesignNotificationModule {}
