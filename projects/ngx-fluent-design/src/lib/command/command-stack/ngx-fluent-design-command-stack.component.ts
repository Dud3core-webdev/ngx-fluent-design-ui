import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'ngx-fluent-design-command-stack',
    templateUrl: './ngx-fluent-design-command-stack.component.html',
    styleUrls: ['./ngx-fluent-design-command-stack.component.scss'],
    imports: [NgClass]
})
export class NgxFluentDesignCommandStackComponent {
    @Input() public fixed: boolean = true;
}
