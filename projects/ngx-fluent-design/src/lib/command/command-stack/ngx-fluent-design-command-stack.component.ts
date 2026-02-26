import { Component, Input } from '@angular/core';

@Component({
    standalone: false,
    selector: 'ngx-fluent-design-command-stack',
    templateUrl: './ngx-fluent-design-command-stack.component.html',
    styleUrls: ['./ngx-fluent-design-command-stack.component.scss']
})
export class NgxFluentDesignCommandStackComponent {
    @Input() public fixed: boolean = true;
}
