import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFluentDesignIconComponent } from './icon-component/icon.component';

const DECLARATIONS: Array<any> = [
    NgxFluentDesignIconComponent
];

@NgModule({
    imports: [CommonModule],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class NgxFluentDesignIconModule {}
