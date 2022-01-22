import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-fluent-design-spinner',
    templateUrl: 'ngx-fluent-design-spinner.component.html',
    styleUrls: ['ngx-fluent-design-spinner.component.scss']
})

export class NgxFluentDesignSpinnerComponent {
    @Input() public size = 'medium';
}
