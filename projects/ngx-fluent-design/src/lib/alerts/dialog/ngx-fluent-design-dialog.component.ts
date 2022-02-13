import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignIconClearClose } from '../../icons/shared/constants/ngx-fluent-design-icons-list';
import { INgxFluentDesignDialog } from '../shared/types/ngx-fluent-design-dialog.interface';
import { NgxFluentDesignDialogHandler } from './dialog-handler.helper';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FadeInAnimation } from '../../common/animations/fade-in.animation';

@Component({
    selector: 'ngx-fluent-design-dialog',
    templateUrl: './ngx-fluent-design-dialog.component.html',
    styleUrls: ['./ngx-fluent-design-dialog.component.scss'],
    animations: [
        FadeInAnimation('150ms', '150ms')
    ]
})
export class NgxFluentDesignDialogComponent implements INgxFluentDesignDialog, OnInit {
    @Input() public primaryActionName: string = 'Primary Action';
    @Input() public header: string = '';
    @Input() public displayCloseIcon: boolean = false;
    @Input() public outsideSheetCanDismissContent: boolean = false;
    @Input() public dialogHandler: NgxFluentDesignDialogHandler;

    @Output() public readonly primaryActionClicked: EventEmitter<void> = new EventEmitter<void>();
    @Output() public readonly secondaryActionClicked: EventEmitter<void> = new EventEmitter<void>();
    @Output() public readonly sheetDismissClicked: EventEmitter<void> = new EventEmitter<void>();
    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;

    private _displaySecondaryAction: boolean = false;
    private _secondaryActionName: string = '';

    private readonly _subscriptions: Subscription = new Subscription();
    private readonly _document: Document;
    private readonly _noScrollClassName: string = 'no-scroll';

    public get shouldDisplaySecondaryAction(): boolean {
        return this._displaySecondaryAction;
    }

    @Input() public set secondaryActionName(actionName: string) {
        this._secondaryActionName = actionName;
        this._displaySecondaryAction = true;
    }

    public get secondaryActionName(): string {
        return this._secondaryActionName;
    }

    constructor(@Inject(DOCUMENT) document: Document) {
        this._document = document;
    }

    public ngOnInit(): void {
        this._subscriptions.add(
            this.dialogHandler.isOpenAsObservable
                .subscribe({
                    next: (isOpen: boolean): void => {
                       this.toggleNoScroll(isOpen);
                    }
                })
        );
    }

    public outerSheetClicked(): void {
        if (this.outsideSheetCanDismissContent) {
            this.dialogHandler.close();
        }
    }

    private toggleNoScroll(isOpen: boolean): void {
        if (isOpen) {
            this._document.body.classList.add(this._noScrollClassName);
        } else {
            this._document.body.classList.remove(this._noScrollClassName);
        }
    }
}
