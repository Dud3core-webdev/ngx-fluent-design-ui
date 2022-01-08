import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignMessageBarComponent } from './message-bar/ngx-fluent-design-message-bar.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignMessageBarComponent
];

@NgModule({
    imports: [CommonModule],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS],
})
export class NgxFluentDesignNotificationModule {}
