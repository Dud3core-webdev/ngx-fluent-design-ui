import { Component, ContentChild, Input } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';
import { NgxFluentDesignInputClassValidatorDirective } from '../shared/directives/ngx-fluent-design-input-class-validator.directive';

@Component({
    selector: 'ngx-fluent-design-textarea-underlined',
    templateUrl: './ngx-fluent-design-textarea-underlined.component.html',
    styleUrls: ['./ngx-fluent-design-textarea-underlined.component.scss']
})
export class NgxFluentDesignTextareaUnderlinedComponent implements INgxFluentDesignInput {
    @ContentChild(NgxFluentDesignInputClassValidatorDirective, {static: true}) public childInput: NgxFluentDesignInputClassValidatorDirective;

    @Input() public label: string;
    @Input() public disabled: boolean;
    @Input() public id: string;
    @Input() public displayLabel: boolean = true;
}

