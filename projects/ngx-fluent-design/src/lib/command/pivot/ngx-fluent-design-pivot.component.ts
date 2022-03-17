import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignCommandComponent } from '../types/ngx-fluent-design-command-component.interface';

@Component({
    selector: 'ngx-fluent-design-pivot',
    templateUrl: './ngx-fluent-design-pivot.component.html',
    styleUrls: ['./ngx-fluent-design-pivot.component.scss']
})
export class NgxFluentDesignPivotComponent implements INgxFluentDesignCommandComponent {
    @Input() public isChecked: boolean;
    @Input() public commandName: string = '';

    @Output() public readonly checked: EventEmitter<void> = new EventEmitter<void>();
}
