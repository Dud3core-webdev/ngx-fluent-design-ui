import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignCompoundButtonComponent } from './button/compound/ngx-fluent-design-compound-button.component';
import { NgxFluentDesignButtonComponent } from './button/standard/ngx-fluent-design-button.component';
import { NgxFluentDesignToggleComponent } from './toggle/ngx-fluent-design-toggle.component';

const COMPONENTS: Array<any> = [
    NgxFluentDesignButtonComponent,
    NgxFluentDesignCompoundButtonComponent,
    NgxFluentDesignToggleComponent
];

@NgModule({
    imports: [CommonModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class NgxFluentDesignCtaModule {}
