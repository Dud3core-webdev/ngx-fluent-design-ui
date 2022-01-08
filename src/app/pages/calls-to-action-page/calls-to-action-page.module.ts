import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CallsToActionPageComponent } from './calls-to-action-page.component';
import { NgxFluentDesignCardModule } from '../../../../projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';
import { NgxFluentDesignCtaModule } from '../../../../projects/ngx-fluent-design/src/lib/cta/ngx-fluent-design-cta.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { NgxFluentDesignInputModule } from '../../../../projects/ngx-fluent-design/src/lib/input/ngx-fluent-design-input.module';

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        NgxFluentDesignCardModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignInputModule,
        SharedComponentsModule
    ],
    declarations: [CallsToActionPageComponent]
})
export class CallsToActionPageModule {}
