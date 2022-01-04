import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';

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
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
