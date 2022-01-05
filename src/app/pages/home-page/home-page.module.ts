import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxFluentDesignCardModule } from '../../../../projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
    imports: [
        FormsModule,
        NgxFluentDesignCardModule,
        CommonModule,
        MarkdownModule.forChild()
    ],
    declarations: [
        HomePageComponent
    ]
})
export class HomePageModule {}