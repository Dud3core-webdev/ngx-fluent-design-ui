import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { InputsPageModule } from './pages/inputs-page/inputs-page.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { CallsToActionPageModule } from './pages/calls-to-action-page/calls-to-action-page.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WINDOW_PROVIDERS } from './shared/factories/window.factory';
import { NgxFluentDesignNotificationModule } from '../../projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';
import { NotificationsPageModule } from './pages/notifications-page/notifications-page.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        MarkdownModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        HomePageModule,
        InputsPageModule,
        CallsToActionPageModule,
        NotificationsPageModule,
        SharedComponentsModule,
        NgxFluentDesignNotificationModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [WINDOW_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule {
}
