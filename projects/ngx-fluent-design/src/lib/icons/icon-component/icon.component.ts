import { Component, Input } from '@angular/core';
import { INgxFluentDesignIcon } from '../shared/types/ngx-fluent-design-icon.interface';
import { INgxFluentDesignIconComponent } from '../shared/types/ngx-fluent-design-icon-component.interface';

@Component({
    selector: 'ngx-fluent-design-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.html']
})
export class NgxFluentDesignIconComponent implements INgxFluentDesignIconComponent {
    @Input() public icon: INgxFluentDesignIcon;
}
