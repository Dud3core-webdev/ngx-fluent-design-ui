import { Component, Input } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';

@Component({
  selector: 'ngx-fluent-design-standard-input',
  templateUrl: './ngx-fluent-design-text-field.component.html',
  styleUrls: ['./ngx-fluent-design-text-field.component.scss']
})
export class NgxFluentDesignTextFieldComponent implements INgxFluentDesignInput {
    @Input() public label: string;
    @Input() public disabled: boolean;
    @Input() public id: string;
    @Input() public displayLabel: boolean = true;
}

