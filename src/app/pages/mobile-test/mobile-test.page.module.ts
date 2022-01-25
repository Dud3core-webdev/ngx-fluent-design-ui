import { NgModule } from '@angular/core';
import { MobileTestPageComponent } from './mobile-test.page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [MobileTestPageComponent]
})
export class MobileTestPageModule {}
