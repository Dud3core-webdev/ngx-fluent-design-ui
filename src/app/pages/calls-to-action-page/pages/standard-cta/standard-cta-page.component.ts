import { Component } from '@angular/core';

@Component({
    templateUrl: './standard-cta-page.component.html',
    styleUrls: ['./standard-cta-page.component.scss']
})
export class StandardCtaPageComponent {
    public standardButtonsDisabled: boolean = false;

    public toggleStandardButtons(): void {
        this.standardButtonsDisabled = !this.standardButtonsDisabled;
    }
}
