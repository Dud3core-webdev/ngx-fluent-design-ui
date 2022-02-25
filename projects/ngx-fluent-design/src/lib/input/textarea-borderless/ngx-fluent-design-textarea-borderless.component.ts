import { Component, ContentChild, Input } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';
import { NgxFluentDesignInputClassValidatorDirective } from '../shared/directives/ngx-fluent-design-input-class-validator.directive';

@Component({
    selector: 'ngx-fluent-design-textarea-borderless',
    templateUrl: './ngx-fluent-design-textarea-borderless.component.html',
    styleUrls: ['./ngx-fluent-design-textarea-borderless.component.scss']
})
export class NgxFluentDesignTextareaBorderlessComponent implements INgxFluentDesignInput {
    @ContentChild(NgxFluentDesignInputClassValidatorDirective, {static: true}) public childInput: NgxFluentDesignInputClassValidatorDirective;

    @Input() public disabled: boolean;
    @Input() public displayLabel: boolean;
    @Input() public id: string;
}

