import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignCta, NgxFluentDesignCtaType } from '../../shared/types/ngx-fluent-design-cta.interface';

@Component({
    selector: 'ngx-fluent-design-button',
    templateUrl: './ngx-fluent-design-button.component.html',
    styleUrls: ['./ngx-fluent-design-button.component.scss']
})
export class NgxFluentDesignButtonComponent implements INgxFluentDesignCta {
    @Input() public disabled: boolean = false;
    @Input() public type: NgxFluentDesignCtaType = 'primary';

    @Output() public clicked: EventEmitter<void> = new EventEmitter<void>();

    public onClicked(): void {
        this.clicked.emit();
    }
}

