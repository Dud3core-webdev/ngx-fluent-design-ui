import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { InputsPageComponent } from './inputs-page.component';
import { NgxFluentDesignCardModule } from '../../../../projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';
import { NgxFluentDesignInputModule } from '../../../../projects/ngx-fluent-design/src/lib/input/ngx-fluent-design-input.module';
import { NgxFluentDesignCtaModule } from '../../../../projects/ngx-fluent-design/src/lib/cta/ngx-fluent-design-cta.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        NgxFluentDesignCardModule,
        NgxFluentDesignInputModule,
        NgxFluentDesignCtaModule,
        ReactiveFormsModule
    ],
    declarations: [InputsPageComponent],
})
export class InputsPageModule { }
