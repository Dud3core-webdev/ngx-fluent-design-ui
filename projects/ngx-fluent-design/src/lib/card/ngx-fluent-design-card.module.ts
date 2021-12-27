import { NgModule } from '@angular/core';
import { NgxFluentDesignCardComponent } from './standard/ngx-fluent-design-card.component';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignDocumentCardComponent } from './document/ngx-fluent-design-document-card.component';

const DECLARATIONS = [
    NgxFluentDesignCardComponent,
    NgxFluentDesignDocumentCardComponent
];

@NgModule({
    imports: [CommonModule],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignCardModule {}
