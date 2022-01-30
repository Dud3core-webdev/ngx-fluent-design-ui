import { NgModule } from '@angular/core';
import { NgxFluentDesignFormFieldComponent } from './standard-textfield/ngx-fluent-design-form-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFluentDesignInputClassValidatorDirective } from './shared/directives/ngx-fluent-design-input-class-validator.directive';
import { NgxFluentDesignToggleComponent } from './toggle/ngx-fluent-design-toggle.component';
import { NgxFluentDesignCheckboxComponent } from './checkbox/ngx-fluent-design-checkbox.component';
import { NgxFluentDesignRadioComponent } from './radio/ngx-fluent-design-radio.component';
import { NgxFluentDesignFormFieldUnderlinedComponent } from './text-field-underlined/ngx-fluent-design-text-field-underlined.component';

const DECLARATIONS = [
    NgxFluentDesignFormFieldComponent,
    NgxFluentDesignInputClassValidatorDirective,
    NgxFluentDesignToggleComponent,
    NgxFluentDesignCheckboxComponent,
    NgxFluentDesignRadioComponent,
    NgxFluentDesignFormFieldUnderlinedComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignInputModule {
}

