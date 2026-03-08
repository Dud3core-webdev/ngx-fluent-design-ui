import { Component, EventEmitter, HostListener, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignIconClearClose } from '../../icons/shared/constants/ngx-fluent-design-icons-list';
import { INgxFluentDesignDialog } from './ngx-fluent-design-dialog.interface';
import { NgxFluentDesignDialogHandler } from './dialog-handler.helper';
import { DOCUMENT, NgStyle } from '@angular/common';
import { ngxFluentDesignFadeInTrigger } from '../animations/ngx-fluent-design.animations';
import { NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator } from '../orchestrators/ngx-fluent-design-surface-handler-body-styles.orchestrator';
import { NgxFluentDesignIconComponent } from '../../icons/icon-component/icon.component';
import { NgxFluentDesignButtonComponent } from '../../cta/standard-button/ngx-fluent-design-button.component';
import { NgxFluentDesignPanelComponent } from '../panel/ngx-fluent-design-panel.component';

@Component({
    selector: 'ngx-fluent-design-dialog',
    templateUrl: './ngx-fluent-design-dialog.component.html',
    styleUrls: ['./ngx-fluent-design-dialog.component.scss'],
    animations: [
        ngxFluentDesignFadeInTrigger
    ],
    imports: [NgStyle, NgxFluentDesignButtonComponent]
})
export class NgxFluentDesignDialogComponent implements INgxFluentDesignDialog, OnInit, OnDestroy {
    @Input() public primaryActionName: string = 'Primary Action';
    @Input() public header: string = '';
    @Input() public displayCloseIcon: boolean = false;
    @Input() public handler: NgxFluentDesignDialogHandler;
    @Input() public canDismissWithOuterContent: boolean;

    @Output() public readonly componentClosed: EventEmitter<void> = new EventEmitter<void>();
    @Output() public readonly primaryActionClicked: EventEmitter<void> = new EventEmitter<void>();
    @Output() public readonly secondaryActionClicked: EventEmitter<void> = new EventEmitter<void>();

    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;
    public readonly closeIconFillColourVariable: string = '--ngx-fluent-design-foreground-neutral-primary';

    private _displaySecondaryAction: boolean = false;
    private _secondaryActionName: string = '';
    private _orchestrator: NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator;
    private readonly _document: Document;

    public get shouldDisplaySecondaryAction(): boolean {
        return this._displaySecondaryAction;
    }

    @HostListener('document:keydown.escape')
    public dismissDialog(): void {
        if (this.canDismissWithOuterContent) {
            this.closeDialog();
        }
    }

    @Input()
    public set secondaryActionName(actionName: string) {
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
        this._orchestrator = new NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator(this.handler, this._document, ['no-scroll']);
        this._orchestrator.onInit();
    }

    public ngOnDestroy(): void {
        this._orchestrator.onDestroy();
    }

    public handleCloseClickEvent(): void {
        if (this.canDismissWithOuterContent) {
            this.closeDialog();
        }
    }

    private closeDialog(): void {
        this.handler.close();
        this.componentClosed.emit();
    }
}
