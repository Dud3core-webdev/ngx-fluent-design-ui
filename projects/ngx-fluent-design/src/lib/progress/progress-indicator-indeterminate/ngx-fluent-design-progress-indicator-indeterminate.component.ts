import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-fluent-design-progress-indicator-indeterminate',
    templateUrl: 'ngx-fluent-design-progress-indicator-indeterminate.component.html',
    styleUrls: ['ngx-fluent-design-progress-indicator-indeterminate.component.scss']
})

export class NgxFluentDesignProgressIndicatorIndeterminateComponent {
    @Input() public label: string = '';
    @Input() public description: string = '';
    @Input() public e2eSuffix: string = 'unspecified-progress-indicator-indeterminate';
}
