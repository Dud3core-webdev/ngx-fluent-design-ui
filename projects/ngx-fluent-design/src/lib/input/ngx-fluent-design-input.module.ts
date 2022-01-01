import { NgModule } from '@angular/core';
import { NgxFluentDesignTextFieldComponent } from './standard-textfield/ngx-fluent-design-text-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const DECLARATIONS = [
    NgxFluentDesignTextFieldComponent,
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
