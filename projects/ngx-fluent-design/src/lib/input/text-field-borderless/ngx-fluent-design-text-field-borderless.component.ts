import { Component, Input } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';

@Component({
    selector: 'ngx-fluent-design-form-field-borderless',
    templateUrl: './ngx-fluent-design-text-field-borderless.component.html',
    styleUrls: ['./ngx-fluent-design-text-field-borderless.component.scss']
})
export class NgxFluentDesignTextFieldBorderlessComponent implements INgxFluentDesignInput {
    @Input() public disabled: boolean;
    @Input() public displayLabel: boolean;
    @Input() public id: string;
    @Input() public label: string;
}

