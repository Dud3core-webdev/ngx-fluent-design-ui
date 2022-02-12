import { Component, Input } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';

@Component({
    selector: 'ngx-fluent-design-textarea-borderless',
    templateUrl: './ngx-fluent-design-textarea-borderless.component.html',
    styleUrls: ['./ngx-fluent-design-textarea-borderless.component.scss']
})
export class NgxFluentDesignTextareaBorderlessComponent implements INgxFluentDesignInput {
    @Input() public disabled: boolean;
    @Input() public displayLabel: boolean;
    @Input() public id: string;
}

