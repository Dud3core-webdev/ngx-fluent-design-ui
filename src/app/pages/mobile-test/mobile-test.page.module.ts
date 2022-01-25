import { NgModule } from '@angular/core';
import { MobileTestPageComponent } from './mobile-test.page.component';
import { NgxFluentDesignCardModule } from '../../../../projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';
import { NgxFluentDesignNotificationModule } from '../../../../projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';
import { NgxFluentDesignCtaModule } from '../../../../projects/ngx-fluent-design/src/lib/cta/ngx-fluent-design-cta.module';
import { NgxFluentDesignInputModule } from '../../../../projects/ngx-fluent-design/src/lib/input/ngx-fluent-design-input.module';
import { NgxFluentDesignProgressModule } from '../../../../projects/ngx-fluent-design/src/lib/progress/ngx-fluent-design-progress.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFluentDesignIconModule } from '../../../../projects/ngx-fluent-design/src/lib/icons/ngx-fluent-design-icon.module';
import { NgxFluentDesignAlertModule } from '../../../../projects/ngx-fluent-design/src/lib/alerts/ngx-fluent-design-alert.module';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxFluentDesignCardModule,
        NgxFluentDesignNotificationModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignInputModule,
        NgxFluentDesignProgressModule,
        NgxFluentDesignIconModule,
        NgxFluentDesignAlertModule,
        MarkdownModule.forChild()
    ],
    declarations: [MobileTestPageComponent]
})
export class MobileTestPageModule {}
