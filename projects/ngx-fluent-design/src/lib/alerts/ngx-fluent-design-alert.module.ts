import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignDialogComponent } from './dialog/ngx-fluent-design-dialog.component';
import { NgxFluentDesignCardModule } from '../card/ngx-fluent-design-card.module';
import { NgxFluentDesignCtaModule } from '../cta/ngx-fluent-design-cta.module';
import { NgxFluentDesignIconModule } from '../icons/ngx-fluent-design-icon.module';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignDialogComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgxFluentDesignCardModule,
        NgxFluentDesignCtaModule,
        NgxFluentDesignIconModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignAlertModule {}
