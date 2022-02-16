import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignMessageBar } from '../types/ngx-fluent-design-message-bar.interface';
import { MessageBarType } from '../types/message-bar.type';
import {
    NgxFluentDesignIconClearClose,
    NgxFluentDesignIconInfoBlocked,
    NgxFluentDesignIconInfoError,
    NgxFluentDesignIconInfoSevereWarn,
    NgxFluentDesignIconInfoSuccess,
    NgxFluentDesignIconInfoWarn
} from '../../icons/shared/constants/ngx-fluent-design-icons-list';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignMessageBarHandler } from './message-bar-handler.helper';
import { NgxFluentDesignCommonAnimations } from '../../surface/animations/ngx-fluent-design.animations';

@Component({
    selector: 'ngx-fluent-design-message-bar',
    templateUrl: './ngx-fluent-design-message-bar.component.html',
    styleUrls: ['./ngx-fluent-design-message-bar.component.scss'],
    animations: [
        NgxFluentDesignCommonAnimations.slideInFromTop('150ms', '150ms')
    ]
})
export class NgxFluentDesignMessageBarComponent implements INgxFluentDesignMessageBar {
    @Input() public messageBarType: MessageBarType = 'info';
    @Input() public canDismiss: boolean;
    @Input() public fixed: boolean = false;
    @Input() public handler: NgxFluentDesignMessageBarHandler;

    @Output() public readonly actionClicked: EventEmitter<void>;
    @Output() public readonly closeClicked: EventEmitter<void>;

    private _displaySecondaryActions: boolean = false;

    constructor() {
        this.actionClicked = new EventEmitter<void>();
        this.closeClicked = new EventEmitter<void>();
    }

    private _actionName: string;

    public get actionName(): string {
        return this._actionName;
    }

    @Input()
    public set actionName(actionName: string) {
        this._actionName = actionName;
        this._displaySecondaryActions = true;
    }

    public get canDisplayActionBar(): boolean {
        return this._actionName !== null && this._displaySecondaryActions === true;
    }

    public get closeLogo(): INgxFluentDesignIcon {
        return NgxFluentDesignIconClearClose;
    }

    public get canDisplayCloseLogo(): boolean {
        return typeof this.handler !== 'undefined' && this.canDismiss;
    }

    public get icon(): INgxFluentDesignIcon {
        switch (this.messageBarType) {
            case 'warning':
                return NgxFluentDesignIconInfoWarn;
            case 'severe-warning':
                return NgxFluentDesignIconInfoSevereWarn;
            case 'error':
                return NgxFluentDesignIconInfoError;
            case 'blocked':
                return NgxFluentDesignIconInfoBlocked;
            case 'success':
                return NgxFluentDesignIconInfoSuccess;
            case 'info':
                return NgxFluentDesignIconInfoWarn;
        }
    }

    public onCloseClicked(): void {
        this.handler.close();
        this.closeClicked.emit();
    }

    public onActionClicked(): void {
        this.actionClicked.emit();
    }

}

