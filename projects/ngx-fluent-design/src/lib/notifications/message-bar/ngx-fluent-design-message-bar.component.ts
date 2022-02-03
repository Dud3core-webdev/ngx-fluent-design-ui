import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignMessageBar } from '../shared/types/ngx-fluent-design-message-bar.interface';
import { MessageBarType } from '../../common/types/message-bar.type';
import {
    NgxFluentDesignIconClearClose,
    NgxFluentDesignIconInfoBlocked,
    NgxFluentDesignIconInfoError,
    NgxFluentDesignIconInfoSevereWarn, NgxFluentDesignIconInfoSuccess,
    NgxFluentDesignIconInfoWarn
} from '../../icons/shared/constants/ngx-fluent-design-icons-list';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';

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

    public get closeLogo(): INgxFluentDesignIcon {
        return NgxFluentDesignIconClearClose;
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

