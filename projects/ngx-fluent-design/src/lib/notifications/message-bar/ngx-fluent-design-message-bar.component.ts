import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignMessageBar } from '../shared/types/ngx-fluent-design-message-bar.interface';
import { MessageBarType } from '../../shared/types/message-bar.type';

@Component({
    selector: 'ngx-fluent-design-message-bar',
    templateUrl: './ngx-fluent-design-message-bar.component.html',
    styleUrls: ['./ngx-fluent-design-message-bar.component.scss']
})
export class NgxFluentDesignMessageBarComponent implements INgxFluentDesignMessageBar {
    @Input() public displayActions: boolean;
    @Input() public messageBarType: MessageBarType = 'info';
    @Input() public multiLine: boolean;
    @Input() public canDismiss: boolean;
    @Input() public actionName: string;
    @Input() public fixed: boolean = false;

    @Output() public readonly actionClicked: EventEmitter<void>;
    @Output() public readonly closeClicked: EventEmitter<void>;

    private _shouldBeHidden: boolean = false;

    public get shouldBeHidden(): boolean {
        return this._shouldBeHidden;
    }

    public get canDisplayActionBar(): boolean {
        return this.canDismiss || this.displayActions;
    }

    public get logoUrl(): string {
        switch (this.messageBarType) {
            case 'warning':
                return './assets/img/message-bar/string-icons-info-warn.svg';
            case 'severe-warning':
                return './assets/img/message-bar/string-icons-info-severe-warn.svg';
            case 'error':
                return './assets/img/message-bar/string-icons-info-error.svg';
            case 'blocked':
                return './assets/img/message-bar/string-icons-info-blocked.svg';
            case 'success':
                return './assets/img/message-bar/string-icons-info-success.svg';
            case 'info':
                return './assets/img/message-bar/string-icons-info-warn.svg';
        }

    }

    constructor() {
        this.actionClicked = new EventEmitter<void>();
        this.closeClicked = new EventEmitter<void>();
    }

    public onCloseClicked(): void {
        this.closeClicked.emit();
    }

    public onActionClicked(): void {
        this.actionClicked.emit();
    }

}

