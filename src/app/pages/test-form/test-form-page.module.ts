import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TestFormPageComponent } from './test-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignCommonComponentsModule } from '../../../../projects/ngx-fluent-design/src/lib/common/components/ngx-fluent-design-common-components.module';
import { NgxFluentDesignNotificationModule } from '../../../../projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';
import { NgxFluentDesignInputModule } from '../../../../projects/ngx-fluent-design/src/lib/input/ngx-fluent-design-input.module';
import { NgxFluentDesignCtaModule } from '../../../../projects/ngx-fluent-design/src/lib/cta/ngx-fluent-design-cta.module';
import { NgxFluentDesignProgressModule } from '../../../../projects/ngx-fluent-design/src/lib/progress/ngx-fluent-design-progress.module';
import { NgxFluentDesignAlertModule } from '../../../../projects/ngx-fluent-design/src/lib/alerts/ngx-fluent-design-alert.module';

@NgModule({
    imports: [
        SharedModule,
        NgxFluentDesignNotificationModule,
        NgxFluentDesignCommonComponentsModule,
        NgxFluentDesignInputModule,
        ReactiveFormsModule,
        NgxFluentDesignCtaModule,
        CommonModule,
        NgxFluentDesignAlertModule,
        NgxFluentDesignProgressModule
    ],
    declarations: [TestFormPageComponent]
})
export class TestFormPageModule {
}
