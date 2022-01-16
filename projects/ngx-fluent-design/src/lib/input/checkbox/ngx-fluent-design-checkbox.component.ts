import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-fluent-design-checkbox',
    templateUrl: 'ngx-fluent-design-checkbox.component.html',
    styleUrls: ['ngx-fluent-design-checkbox.component.scss']
})

export class NgxFluentDesignCheckboxComponent {
    @Input() label: string;
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
}
