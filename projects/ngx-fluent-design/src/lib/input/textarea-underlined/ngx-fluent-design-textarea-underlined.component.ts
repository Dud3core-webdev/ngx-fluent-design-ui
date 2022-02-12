import { Component, Input } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';

@Component({
    selector: 'ngx-fluent-design-textarea-underlined',
    templateUrl: './ngx-fluent-design-textarea-underlined.component.html',
    styleUrls: ['./ngx-fluent-design-textarea-underlined.component.scss']
})
export class NgxFluentDesignTextareaUnderlinedComponent implements INgxFluentDesignInput {
    @Input() public label: string;
    @Input() public disabled: boolean;
    @Input() public id: string;
    @Input() public displayLabel: boolean = true;
}

