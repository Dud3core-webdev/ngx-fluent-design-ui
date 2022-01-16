import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { InputsPageComponent } from './inputs-page.component';
import { NgxFluentDesignCardModule } from '../../../../projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';
import { NgxFluentDesignInputModule } from '../../../../projects/ngx-fluent-design/src/lib/input/ngx-fluent-design-input.module';
import { NgxFluentDesignCtaModule } from '../../../../projects/ngx-fluent-design/src/lib/cta/ngx-fluent-design-cta.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { RouterModule } from '@angular/router';
import { FormFieldPageComponent } from './pages/form-field/form-field-page.component';
import { TogglePageComponent } from './pages/toggle/toggle-page.component';
import {CheckboxPageComponent} from './pages/checkbox/checkbox-page.component';

const DECLARATIONS: Array<any> = [
    InputsPageComponent,
    FormFieldPageComponent,
    TogglePageComponent,
    CheckboxPageComponent
];

@NgModule({
    imports: [
        MarkdownModule.forChild(),
        NgxFluentDesignCardModule,
        NgxFluentDesignInputModule,
        NgxFluentDesignCtaModule,
        ReactiveFormsModule,
        CommonModule,
        SharedComponentsModule,
        RouterModule
    ],
    declarations: [...DECLARATIONS],
})
export class InputsPageModule { }
