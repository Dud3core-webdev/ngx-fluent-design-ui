import { Component } from '@angular/core';

@Component({
    templateUrl: './compound-cta.page.component.html',
    styleUrls: ['./compound-cta.page.component.scss']
})
export class CompoundCtaPageComponent {
    public compoundButtonsDisabled: boolean = false;

    public toggleCompoundButtons(): void {
        this.compoundButtonsDisabled = !this.compoundButtonsDisabled;
    }
}
