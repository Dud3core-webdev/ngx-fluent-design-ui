import { Component, Input } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';

@Component({
    selector: 'ngx-fluent-design-form-field-underlined',
    templateUrl: './ngx-fluent-design-text-field-underlined.component.html',
    styleUrls: ['./ngx-fluent-design-text-field-underlined.component.scss']
})
export class NgxFluentDesignFormFieldUnderlinedComponent implements INgxFluentDesignInput {
    @Input() public label: string;
    @Input() public disabled: boolean;
    @Input() public id: string;
    @Input() public displayLabel: boolean = true;
}

