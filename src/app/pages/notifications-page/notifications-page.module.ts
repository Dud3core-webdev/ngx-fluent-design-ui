import { NgModule } from '@angular/core';
import { NotificationsPageComponent } from './notifications-page.component';
import { NgxFluentDesignNotificationModule } from '../../../../projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { RouterModule } from '@angular/router';
import { MessageBarPageComponent } from './pages/message-bar/message-bar-page.component';
import { NgxFluentDesignCardModule } from '../../../../projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';

const DECLARATIONS = [
    NotificationsPageComponent,
    MessageBarPageComponent
];

@NgModule({
    imports: [
        NgxFluentDesignNotificationModule,
        NgxFluentDesignCardModule,
        SharedComponentsModule,
        RouterModule
    ],
    declarations: [DECLARATIONS]
})
export class NotificationsPageModule {}
