import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { InputsPageModule } from './pages/inputs-page/inputs-page.module';
import { SharedComponentsModule } from './pages/shared/components/shared-components.module';
import { CallsToActionPageModule } from './pages/calls-to-action-page/calls-to-action-page.module';
import { TogglePageModule } from './pages/toggle-page/toggle-page.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
        TogglePageModule,
        SharedComponentsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
