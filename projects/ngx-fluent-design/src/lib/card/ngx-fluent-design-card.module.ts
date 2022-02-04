import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignDocumentCardComponent } from './document/ngx-fluent-design-document-card.component';

const DECLARATIONS = [
    NgxFluentDesignDocumentCardComponent
];

@NgModule({
    imports: [CommonModule],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignCardModule {}
