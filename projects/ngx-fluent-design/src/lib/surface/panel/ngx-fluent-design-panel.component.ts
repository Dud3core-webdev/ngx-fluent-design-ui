import { Component, EventEmitter, HostListener, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignIconArrowLeft, NgxFluentDesignIconClearClose } from '../../icons/shared/constants/ngx-fluent-design-icons-list';
import { NgxFluentDesignPanelHandler } from './panel-handler.helper';
import { NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator } from '../orchestrators/ngx-fluent-design-surface-handler-body-styles.orchestrator';
import { DOCUMENT } from '@angular/common';
import { NgxFluentDesignCommonAnimations } from '../animations/ngx-fluent-design.animations';
import { INgxFluentDesignPanel } from './ngx-fluent-design-panel.interface';

@Component({
    selector: 'ngx-fluent-design-panel',
    templateUrl: './ngx-fluent-design-panel.component.html',
    styleUrls: ['./ngx-fluent-design-panel.component.scss'],
    animations: [
        NgxFluentDesignCommonAnimations.SlideInFromRightAnimation('150ms', '150ms'),
    ]
})
export class NgxFluentDesignPanelComponent implements INgxFluentDesignPanel, OnInit, OnDestroy {
    @Input() public handler: NgxFluentDesignPanelHandler;
    @Input() public canDismissWithOuterContent: boolean = true;
    @Input() public displayCloseIcon: boolean = true;
    @Input() public includeReturnCta: boolean = false;
    @Input() public returnCtaLabel: string;
    @Input() public header: string;

    @Output() public readonly componentClosed: EventEmitter<void>;

    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;
    public readonly closeIconFillColourVariable: string = '--ngx-fluent-design-foreground-neutral-primary';
    public readonly leftArrowIcon: INgxFluentDesignIcon = NgxFluentDesignIconArrowLeft;
    public readonly leftArrowIconFillColourVariable: string = '--ngx-fluent-design-theme-primary';

    private _orchestrator: NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator;
    private readonly _document: Document;

    constructor(@Inject(DOCUMENT) document: Document) {
        this.componentClosed = new EventEmitter<void>();
        this._document = document;
    }

    @HostListener('document:keydown.escape')
    public dismissPanel(): void {
        if (this.canDismissWithOuterContent) {
            this.closePanel();
        }
    }

    handleCloseClickEvent(): void {
        if (this.canDismissWithOuterContent) {
            this.closePanel();
        }
    }

    public ngOnInit(): void {
        this._orchestrator = new NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator(this.handler, this._document, ['no-scroll']);
        this._orchestrator.onInit();
    }

    public ngOnDestroy(): void {
        this._orchestrator.onDestroy();
    }

    private closePanel(): void {
        this.handler.close();
        this.componentClosed.emit();
    }
}
