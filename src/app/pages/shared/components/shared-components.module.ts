import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { CodeExampleComponent } from './code-example/code-example.component';
import { NgxFluentDesignCardModule } from '../../../../../projects/ngx-fluent-design/src/lib/card/ngx-fluent-design-card.module';
import { MarkdownModule } from 'ngx-markdown';

const DECLARATIONS: Array<any> = [
    SideNavComponent,
    CodeExampleComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgxFluentDesignCardModule,
        MarkdownModule.forChild()
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class SharedComponentsModule {}
