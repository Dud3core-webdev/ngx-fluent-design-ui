import { NgModule } from '@angular/core';
import { NgxFluentDesignFormFieldComponent } from './standard-textfield/ngx-fluent-design-form-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputClassValidatorDirective } from './shared/directives/input-class-validator.directive';
import { NgxFluentDesignToggleComponent } from './toggle/ngx-fluent-design-toggle.component';
import { NgxFluentDesignCheckboxComponent } from './checkbox/ngx-fluent-design-checkbox.component';
import { NgxFluentDesignRadioComponent } from './radio/ngx-fluent-design-radio.component';
import { TestComponent } from './checkbox/test/test.component';

const DECLARATIONS = [
    NgxFluentDesignFormFieldComponent,
    InputClassValidatorDirective,
    NgxFluentDesignToggleComponent,
    NgxFluentDesignCheckboxComponent,
    NgxFluentDesignRadioComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [...DECLARATIONS, TestComponent],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignInputModule {
}

