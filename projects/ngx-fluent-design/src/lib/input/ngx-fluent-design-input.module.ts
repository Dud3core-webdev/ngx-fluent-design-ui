import { NgModule } from '@angular/core';
import { NgxFluentDesignTextFieldComponent } from './standard-textfield/ngx-fluent-design-text-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFluentDesignMultilineTextFieldComponent } from './multiline-textfield/ngx-fluent-design-multiline-text-field.component';

const DECLARATIONS = [
    NgxFluentDesignTextFieldComponent,
    NgxFluentDesignMultilineTextFieldComponent
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
