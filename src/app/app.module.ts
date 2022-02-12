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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestFormPageModule } from './pages/test-form/test-form-page.module';
import { NgxFluentDesignSurfaceModule } from '../../projects/ngx-fluent-design/src/lib/surface/ngx-fluent-design-surface.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        DesktopTestPageModule,
        MobileTestPageModule,
        TestFormPageModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MarkdownModule.forRoot(),
        BrowserModule,
        NgxFluentDesignNotificationModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignSurfaceModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
