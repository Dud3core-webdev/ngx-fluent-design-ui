import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { NgxFluentDesignNotificationModule } from '../../projects/ngx-fluent-design/src/lib/notifications/ngx-fluent-design-notification.module';
import { NgxFluentDesignCardModule } from 'projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';
import { NgxFluentDesignCtaModule } from 'projects/ngx-fluent-design/src/lib/cta/ngx-fluent-design-cta.module';
import { NgxFluentDesignInputModule } from 'projects/ngx-fluent-design/src/lib/input/ngx-fluent-design-input.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        MarkdownModule.forRoot(),
        BrowserModule,
        NgxFluentDesignCardModule,
        NgxFluentDesignNotificationModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignInputModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
