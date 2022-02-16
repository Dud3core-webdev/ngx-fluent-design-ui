import { NgModule } from '@angular/core';
import { MobileTestPageComponent } from './mobile-test.page.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxFluentDesignNotificationModule } from '../../../../projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';

@NgModule({
    imports: [
        SharedModule,
        NgxFluentDesignNotificationModule
    ],
    declarations: [MobileTestPageComponent]
})
export class MobileTestPageModule {}
