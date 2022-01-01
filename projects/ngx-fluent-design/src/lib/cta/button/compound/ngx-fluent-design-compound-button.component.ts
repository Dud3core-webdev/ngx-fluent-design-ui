import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignCta, NgxFluentDesignCtaType } from '../../shared/types/ngx-fluent-design-cta.interface';

@Component({
    selector: 'ngx-fluent-design-compound-button',
    templateUrl: './ngx-fluent-design-compound-button.component.html',
    styleUrls: ['./ngx-fluent-design-compound-button.component.scss']
})
export class NgxFluentDesignCompoundButtonComponent implements INgxFluentDesignCta {
    @Input() public disabled = false;
    @Input() public type: NgxFluentDesignCtaType = 'primary';
    @Input() public secondaryText: string;

    @Output() public clicked: EventEmitter<void> = new EventEmitter<void>();

    public onClicked(): void {
        this.clicked.emit();
    }
}
