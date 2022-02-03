import { Component, Input } from '@angular/core';
import { NgxFluentDesignProgressSizeType } from '../../shared/types/ngx-fluent-design-progress-size.type';

@Component({
    selector: 'ngx-fluent-design-spinner',
    templateUrl: 'ngx-fluent-design-spinner.component.html',
    styleUrls: ['ngx-fluent-design-spinner.component.scss']
})

export class NgxFluentDesignSpinnerComponent {
    @Input() public size: NgxFluentDesignProgressSizeType = 'medium';
    @Input() public label: string = '';
    @Input() public e2eSuffix: string = 'unspecified-spinner';
}
