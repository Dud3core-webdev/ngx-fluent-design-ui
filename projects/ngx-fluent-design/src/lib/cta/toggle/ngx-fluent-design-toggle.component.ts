import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngx-fluent-design-toggle',
    templateUrl: './ngx-fluent-design-toggle.component.html',
    styleUrls: ['./ngx-fluent-design-toggle.component.scss']
})
export class NgxFluentDesignToggleComponent {
    @Input() public label: string;
    @Input() public inlineLabel: boolean = false;
    @Input() public toggled: boolean = false;
    @Input() public disabled: boolean = false;

    @Output() public readonly changeEvent: EventEmitter<void>;
    @Output() public readonly toggleOnEvent: EventEmitter<void>;
    @Output() public readonly toggleOffEvent: EventEmitter<void>;

    constructor() {
        this.changeEvent = new EventEmitter<void>();
        this.toggleOnEvent = new EventEmitter<void>();
        this.toggleOffEvent = new EventEmitter<void>();
    }

    public toggle(): void {
        this.toggled = !this.toggled;
        this.changeEvent.emit();
        this.emitToggleEvent();
    }

    private emitToggleEvent(): void {
        if (this.toggled === true) {
            this.toggleOnEvent.emit();
        } else {
            this.toggleOffEvent.emit();
        }
    }
}
