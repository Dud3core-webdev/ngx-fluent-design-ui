import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-fluent-design-progress-indicator',
    templateUrl: 'ngx-fluent-design-progress-indicator.component.html',
    styleUrls: ['ngx-fluent-design-progress-indicator.component.scss']
})

export class NgxFluentDesignProgressIndicatorComponent {
    @Input() public currentValue: number = 0;
    @Input() public label: string = '';
    @Input() public description: string = '';
    @Input() public e2eSuffix: string = 'unspecified-progress-indicator';
}
