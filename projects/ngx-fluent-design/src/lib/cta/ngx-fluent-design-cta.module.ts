import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignCompoundButtonComponent } from './compound-button/ngx-fluent-design-compound-button.component';
import { NgxFluentDesignButtonComponent } from './standard-button/ngx-fluent-design-button.component';
import { NgxFluentDesignButtonLinkDirective } from './link-button/ngx-fluent-design-button-link.directive';
import { NgxFluentDesignActionButtonDirective } from './action-button/ngx-fluent-design-action-button.directive';

const COMPONENTS: Array<any> = [
    NgxFluentDesignButtonComponent,
    NgxFluentDesignCompoundButtonComponent,
];

const DIRECTIVES: Array<any> = [
    NgxFluentDesignButtonLinkDirective,
    NgxFluentDesignActionButtonDirective
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
