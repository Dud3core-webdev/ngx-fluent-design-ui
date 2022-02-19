import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INgxFluentDesignMessageBar } from '../types/ngx-fluent-design-message-bar.interface';
import { MessageBarType } from '../types/message-bar.type';
import { NgxFluentDesignIconClearClose } from '../../icons/shared/constants/ngx-fluent-design-icons-list';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignMessageBarHandler } from './message-bar-handler.helper';
import { NgxFluentDesignCommonAnimations } from '../../surface/animations/ngx-fluent-design.animations';
import { INgxFluentDesignMessageBarIcon, NgxFluentDesignMessageBarIconFactory } from './ngx-fluent-design-message-bar-icon.factory';

@Component({
    selector: 'ngx-fluent-design-message-bar',
    templateUrl: './ngx-fluent-design-message-bar.component.html',
    styleUrls: ['./ngx-fluent-design-message-bar.component.scss'],
    animations: [
        NgxFluentDesignCommonAnimations.slideInFromTop('150ms', '150ms')
    ]
})
export class NgxFluentDesignMessageBarComponent implements OnInit, INgxFluentDesignMessageBar {
    @Input() public messageBarType: MessageBarType = 'info';
    @Input() public canDismiss: boolean;
    @Input() public fixed: boolean = false;
    @Input() public handler: NgxFluentDesignMessageBarHandler;

    @Output() public readonly actionClicked: EventEmitter<void>;
    @Output() public readonly closeClicked: EventEmitter<void>;
    public iconConfig: INgxFluentDesignMessageBarIcon;
    public closeIconConfig: INgxFluentDesignMessageBarIcon;

    private _displaySecondaryActions: boolean = false;
    private _actionName: string;

    constructor() {
        this.actionClicked = new EventEmitter<void>();
        this.closeClicked = new EventEmitter<void>();
    }

    public ngOnInit(): void {
        this.iconConfig = NgxFluentDesignMessageBarIconFactory.for(this.messageBarType);
        this.closeIconConfig = NgxFluentDesignMessageBarIconFactory.forCloseIcon(this.messageBarType);
    }

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

    public onCloseClicked(): void {
        this.handler.close();
        this.closeClicked.emit();
    }

    public onActionClicked(): void {
        this.actionClicked.emit();
    }

}

