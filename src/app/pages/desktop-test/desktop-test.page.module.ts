import { NgModule } from '@angular/core';
import { DesktopTestPageComponent } from './desktop-test.page.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxFluentDesignNotificationModule } from 'projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';

@NgModule({
    imports: [
        SharedModule,
        NgxFluentDesignNotificationModule
    ],
    declarations: [DesktopTestPageComponent]
})
export class DesktopTestPageModule {}
