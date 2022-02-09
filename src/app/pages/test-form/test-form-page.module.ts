import { NgModule } from '@angular/core';
import { NgxFluentDesignCommonComponentsModule } from 'projects/ngx-fluent-design/src/lib/common/components/ngx-fluent-design-common-components.module';
import { NgxFluentDesignNotificationModule } from 'projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';
import { SharedModule } from '../../shared/shared.module';
import { TestFormPageComponent } from './test-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFluentDesignInputModule } from 'projects/ngx-fluent-design/src/lib/input/ngx-fluent-design-input.module';
import { NgxFluentDesignCtaModule } from 'projects/ngx-fluent-design/src/lib/cta/ngx-fluent-design-cta.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        NgxFluentDesignNotificationModule,
        NgxFluentDesignCommonComponentsModule,
        NgxFluentDesignInputModule,
        ReactiveFormsModule,
        NgxFluentDesignCtaModule,
        CommonModule
    ],
    declarations: [TestFormPageComponent]
})
export class TestFormPageModule {
}
