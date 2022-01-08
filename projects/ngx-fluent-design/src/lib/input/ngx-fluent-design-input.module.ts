import { NgModule } from '@angular/core';
import { NgxFluentDesignTextFieldComponent } from './standard-textfield/ngx-fluent-design-text-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputClassValidatorDirective } from './shared/directives/input-class-validator.directive';
import { NgxFluentDesignToggleComponent } from './toggle/ngx-fluent-design-toggle.component';

const DECLARATIONS = [
    NgxFluentDesignTextFieldComponent,
    InputClassValidatorDirective,
    NgxFluentDesignToggleComponent
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

