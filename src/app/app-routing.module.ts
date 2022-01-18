import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';
import { CallsToActionPageComponent } from './pages/calls-to-action-page/calls-to-action-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { CompoundCtaPageComponent } from './pages/calls-to-action-page/pages/compound-cta/compound-cta.page.component';
import { StandardCtaPageComponent } from './pages/calls-to-action-page/pages/standard-cta/standard-cta-page.component';
import { FormFieldPageComponent } from './pages/inputs-page/pages/form-field/form-field-page.component';
import { TogglePageComponent } from './pages/inputs-page/pages/toggle/toggle-page.component';
import { MessageBarPageComponent } from './pages/notifications-page/pages/message-bar/message-bar-page.component';
import { CheckboxPageComponent } from './pages/inputs-page/pages/checkbox/checkbox-page.component';
import { RadioPageComponent } from './pages/inputs-page/pages/radio/radio-page.component';

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
        component: InputsPageComponent,
        children: [
            {
                path: 'checkbox',
                component: CheckboxPageComponent
            },
            {
                path: 'form-field',
                component: FormFieldPageComponent
            },
            {
                path: 'radio',
                component: RadioPageComponent
            },
            {
                path: 'toggle',
                component: TogglePageComponent
            }
        ]
    },
    {
        path: 'calls-to-action',
        component: CallsToActionPageComponent,
        children: [
            {
                path: 'compound',
                component: CompoundCtaPageComponent
            },
            {
                path: 'standard',
                component: StandardCtaPageComponent
            }
        ]
    },
    {
        path: 'notifications',
        component: NotificationsPageComponent,
        children: [
            {
                path: 'message-bar',
                component: MessageBarPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
