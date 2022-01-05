import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';
import { CallsToActionPageComponent } from './pages/calls-to-action-page/calls-to-action-page.component';

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
        path: 'inputs',
        component: InputsPageComponent
    },
    {
        path: 'calls-to-action',
        component: CallsToActionPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}