import { Component, Input } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';

@Component({
    selector: 'ngx-fluent-design-standard-textarea',
    templateUrl: './ngx-fluent-design-textarea.component.html',
    styleUrls: ['./ngx-fluent-design-textarea.component.scss']
})
export class NgxFluentDesignTextareaComponent implements INgxFluentDesignInput {
    @Input() public label: string;
    @Input() public disabled: boolean;
    @Input() public id: string;
    @Input() public displayLabel: boolean = true;
}
