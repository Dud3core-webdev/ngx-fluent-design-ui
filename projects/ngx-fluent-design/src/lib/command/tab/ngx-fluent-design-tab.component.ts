import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignCommandComponent } from '../types/ngx-fluent-design-command-component.interface';

@Component({
    selector: 'ngx-fluent-design-tab',
    templateUrl: './ngx-fluent-design-tab.component.html',
    styleUrls: ['./ngx-fluent-design-tab.component.scss']
})
export class NgxFluentDesignTabComponent implements INgxFluentDesignCommandComponent {
    @Input() public isChecked: boolean = false;
    @Input() public commandName: string = '';

    @Output() public readonly onChecked: EventEmitter<void> = new EventEmitter<void>();
}
