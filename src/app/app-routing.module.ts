import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';
import { CallsToActionPageComponent } from './pages/calls-to-action-page/calls-to-action-page.component';
import { TogglePageComponent } from './pages/toggle-page/toggle-page.component';
import { MessageBarPageComponent } from './pages/message-bar-page/message-bar-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'form-field',
        component: InputsPageComponent
    },
    {
        path: 'calls-to-action',
        component: CallsToActionPageComponent
    },
    {
        path: 'toggle',
        component: TogglePageComponent
    },
    {
        path: 'message-bar',
        component: MessageBarPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
