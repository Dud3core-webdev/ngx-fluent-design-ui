import { Component, Input } from '@angular/core';
import { INgxFluentDesignIcon } from '../shared/types/ngx-fluent-design-icon.interface';

@Component({
    selector: 'ngx-fluent-design-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.html']
})
export class NgxFluentDesignIconComponent {
    @Input() public width: number = 15;
    @Input() public height: number = 15;
    @Input() public icon: INgxFluentDesignIcon;
}
