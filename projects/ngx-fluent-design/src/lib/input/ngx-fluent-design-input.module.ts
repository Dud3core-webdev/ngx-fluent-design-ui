import { NgModule } from '@angular/core';
import { NgxFluentDesignFormFieldComponent } from './standard-textfield/ngx-fluent-design-form-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputClassValidatorDirective } from './shared/directives/input-class-validator.directive';
import { NgxFluentDesignToggleComponent } from './toggle/ngx-fluent-design-toggle.component';
import {NgxFluentDesignCheckboxComponent} from './checkbox/ngx-fluent-design-checkbox.component';

const DECLARATIONS = [
    NgxFluentDesignFormFieldComponent,
    InputClassValidatorDirective,
    NgxFluentDesignToggleComponent,
    NgxFluentDesignCheckboxComponent
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
export class NgxFluentDesignInputModule {}

