import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignCompoundButtonComponent } from './button/compound/ngx-fluent-design-compound-button.component';
import { NgxFluentDesignButtonComponent } from './button/standard/ngx-fluent-design-button.component';
import { NgxFluentDesignButtonLinkDirective } from './link-button/ngx-fluent-design-button-link.directive';

const COMPONENTS: Array<any> = [
    NgxFluentDesignButtonComponent,
    NgxFluentDesignCompoundButtonComponent,
];

const DIRECTIVES: Array<any> = [
    NgxFluentDesignButtonLinkDirective
];

@NgModule({
    imports: [CommonModule],
    declarations: [
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    exports: [
        ...COMPONENTS,
        ...DIRECTIVES
    ],
})
export class NgxFluentDesignCtaModule {}
