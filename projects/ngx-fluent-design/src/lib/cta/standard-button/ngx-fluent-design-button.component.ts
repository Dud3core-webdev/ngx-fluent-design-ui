import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignCta } from '../types/ngx-fluent-design-cta.interface';
import { NgxFluentDesignSlotNames } from '../../types/theme-names.type';
import { NgxFluentDesignCtaType } from '../types/cta.type';
import { NgClass } from '@angular/common';

@Component({
    selector: 'ngx-fluent-design-button',
    templateUrl: './ngx-fluent-design-button.component.html',
    styleUrls: ['./ngx-fluent-design-button.component.scss'],
    imports: [NgClass]
})
export class NgxFluentDesignButtonComponent implements INgxFluentDesignCta {
    @Input() public disabled: boolean = false;
    @Input() public type: NgxFluentDesignCtaType = 'primary';
    @Input() public slotName: NgxFluentDesignSlotNames = 'none';

    @Output() public clicked: EventEmitter<void> = new EventEmitter<void>();

    public onClicked(): void {
        this.clicked.emit();
    }

}

