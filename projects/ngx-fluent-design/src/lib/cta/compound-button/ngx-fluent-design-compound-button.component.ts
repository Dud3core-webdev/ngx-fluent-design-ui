import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignCta } from '../types/ngx-fluent-design-cta.interface';
import { NgxFluentDesignSlotNames } from '../../types/theme-names.type';
import { NgxFluentDesignCtaType } from '../types/cta.type';

@Component({
    selector: 'ngx-fluent-design-compound-button',
    templateUrl: './ngx-fluent-design-compound-button.component.html',
    styleUrls: ['./ngx-fluent-design-compound-button.component.scss']
})
export class NgxFluentDesignCompoundButtonComponent implements INgxFluentDesignCta {
    @Input() public type: NgxFluentDesignCtaType = 'primary';
    @Input() public slotName: NgxFluentDesignSlotNames = 'none';
    @Input() public disabled = false;
    @Input() public secondaryText: string;

    @Output() public clicked: EventEmitter<void> = new EventEmitter<void>();

    public onClicked(): void {
        this.clicked.emit();
    }

}
