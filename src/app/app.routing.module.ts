import { Router, RouterModule, Routes } from '@angular/router';
import { DesktopTestPageComponent } from './pages/desktop-test/desktop-test.page.component';
import { NgModule } from '@angular/core';
import { MobileTestPageComponent } from './pages/mobile-test/mobile-test.page.component';
import { TestFormPageComponent } from './pages/test-form/test-form-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'desktop',
        pathMatch: 'full'
    },
    {
        path: 'desktop',
        component: DesktopTestPageComponent
    },
    {
        path: 'mobile',
        component: MobileTestPageComponent
    },
    {
        path: 'test-form',
        component: TestFormPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
