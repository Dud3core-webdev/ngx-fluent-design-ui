import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { InputsPageModule } from './pages/inputs-page/inputs-page.module';

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
        InputsPageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
