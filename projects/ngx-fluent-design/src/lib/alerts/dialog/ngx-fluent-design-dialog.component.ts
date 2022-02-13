import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignIconClearClose } from '../../icons/shared/constants/ngx-fluent-design-icons-list';
import { INgxFluentDesignDialog } from '../shared/types/ngx-fluent-design-dialog.interface';
import { NgxFluentDesignDialogHandler } from './dialog-handler.helper';
import { DOCUMENT } from '@angular/common';
import { NgxFluentDesignCommonAnimations } from '../../common/animations/fade-in.animation';
import { ComponentHandlerBodyClassOrchestrator } from '../../common/orchestrators/component-handler-body-class.orchestrator';

@Component({
    selector: 'ngx-fluent-design-dialog',
    templateUrl: './ngx-fluent-design-dialog.component.html',
    styleUrls: ['./ngx-fluent-design-dialog.component.scss'],
    animations: [
        NgxFluentDesignCommonAnimations.FadeInAnimation('150ms', '150ms')
    ]
})
export class NgxFluentDesignDialogComponent implements INgxFluentDesignDialog, OnInit, OnDestroy {
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
    private _orchestrator: ComponentHandlerBodyClassOrchestrator;
    private readonly _document: Document;

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
        this._orchestrator = new ComponentHandlerBodyClassOrchestrator(this.dialogHandler, this._document);
        this._orchestrator.onInit();
    }

    public ngOnDestroy(): void {
        this._orchestrator.onDestroy();
    }

    public outerSheetClicked(): void {
        if (this.outsideSheetCanDismissContent) {
            this.dialogHandler.close();
        }
    }
}
