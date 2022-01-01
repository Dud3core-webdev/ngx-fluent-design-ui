import { NgModule } from '@angular/core';
import { NgxFluentDesignTextFieldComponent } from './standard-textfield/ngx-fluent-design-text-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputClassValidatorDirective } from './shared/directives/input-class-validator.directive';

const DECLARATIONS = [
    NgxFluentDesignTextFieldComponent,
    InputClassValidatorDirective
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

