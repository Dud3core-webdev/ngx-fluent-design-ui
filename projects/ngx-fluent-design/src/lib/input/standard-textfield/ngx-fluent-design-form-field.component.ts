import { Component, Input } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';

@Component({
  selector: 'ngx-fluent-design-form-field',
  templateUrl: './ngx-fluent-design-form-field.component.html',
  styleUrls: ['./ngx-fluent-design-form-field.component.scss']
})
export class NgxFluentDesignFormFieldComponent implements INgxFluentDesignInput {
    @Input() public label: string;
    @Input() public disabled: boolean;
    @Input() public id: string;
    @Input() public displayLabel: boolean = true;
}

