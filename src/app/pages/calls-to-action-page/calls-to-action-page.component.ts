import { Component } from '@angular/core';

@Component({
    templateUrl: './calls-to-action-page.component.html',
    styleUrls: ['./calls-to-action-page.component.scss']
})
export class CallsToActionPageComponent {
    public standardButtonsDisabled: boolean = false;
    public compoundButtonsDisabled: boolean = false;

    public toggleStandardButtons(): void {
        this.standardButtonsDisabled = !this.standardButtonsDisabled;
    }

    public toggleCompoundButtons(): void {
        this.compoundButtonsDisabled = !this.compoundButtonsDisabled;
    }
}
