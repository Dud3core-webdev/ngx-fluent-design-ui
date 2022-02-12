import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFluentDesignCardModule } from '../../../projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';
import { NgxFluentDesignNotificationModule } from '../../../projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';
import { NgxFluentDesignCtaModule } from '../../../projects/ngx-fluent-design/src/lib/cta/ngx-fluent-design-cta.module';
import { NgxFluentDesignInputModule } from '../../../projects/ngx-fluent-design/src/lib/input/ngx-fluent-design-input.module';
import { NgxFluentDesignProgressModule } from '../../../projects/ngx-fluent-design/src/lib/progress/ngx-fluent-design-progress.module';
import { NgxFluentDesignIconModule } from '../../../projects/ngx-fluent-design/src/lib/icons/ngx-fluent-design-icon.module';
import { NgxFluentDesignAlertModule } from '../../../projects/ngx-fluent-design/src/lib/alerts/ngx-fluent-design-alert.module';
import { AbsoluteStateOfAComponent } from './absolute-state-of-a-component/absolute-state-of-a.component';
import { NgxFluentDesignSurfaceModule } from '../../../projects/ngx-fluent-design/src/lib/surface/ngx-fluent-design-surface.module';

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
        NgxFluentDesignSurfaceModule
    ],
    declarations: [AbsoluteStateOfAComponent],
    exports: [AbsoluteStateOfAComponent]
})
export class SharedModule {
}
