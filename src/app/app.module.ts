import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { DesktopTestPageModule } from './pages/desktop-test/desktop-test.page.module';
import { AppRoutingModule } from './app.routing.module';
import { NgxFluentDesignNotificationModule } from 'projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';
import { NgxFluentDesignCtaModule } from 'projects/ngx-fluent-design/src/lib/cta/ngx-fluent-design-cta.module';
import { MobileTestPageModule } from './pages/mobile-test/mobile-test.page.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        DesktopTestPageModule,
        MobileTestPageModule,
        HttpClientModule,
        MarkdownModule.forRoot(),
        BrowserModule,
        NgxFluentDesignNotificationModule,
        NgxFluentDesignCtaModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
