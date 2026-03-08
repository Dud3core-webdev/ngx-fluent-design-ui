import { Routes } from '@angular/router';
import { DesktopTestPageComponent } from './pages/desktop-test/desktop-test.page.component';
import { MobileTestPageComponent } from './pages/mobile-test/mobile-test.page.component';
import { TestFormPageComponent } from './pages/test-form/test-form-page.component';

export const routes: Routes = [
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
