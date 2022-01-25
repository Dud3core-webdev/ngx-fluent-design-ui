import { NgModule } from '@angular/core';
import { DesktopTestPageComponent } from './desktop-test.page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [DesktopTestPageComponent]
})
export class DesktopTestPageModule {}
