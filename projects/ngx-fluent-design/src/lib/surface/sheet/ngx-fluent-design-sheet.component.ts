import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgxFluentDesignSheetHandler } from './sheet-handler.helper';
import { NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator } from '../orchestrators/ngx-fluent-design-surface-handler-body-styles.orchestrator';
import { NgxFluentDesignCommonAnimations } from '../animations/ngx-fluent-design.animations';
import { INgxFluentDesignSurface } from '../types/ngx-fluent-design-surface.interface';

@Component({
    selector: 'ngx-fluent-design-sheet',
    templateUrl: './ngx-fluent-design-sheet.component.html',
    styleUrls: ['./ngx-fluent-design-sheet.component.scss'],
    animations: [NgxFluentDesignCommonAnimations.FadeInAnimation('150ms', '150ms')]
})
export class NgxFluentDesignSheetComponent implements OnInit, OnDestroy, INgxFluentDesignSurface {

    @Input() public handler: NgxFluentDesignSheetHandler;
    @Input() public canDismissWithOuterContent: boolean = true;

    @Output() public readonly componentClosed: EventEmitter<void>;

    private readonly _document: Document;
    private _orchestrator: NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator;

    constructor(@Inject(DOCUMENT) document: Document) {
        this.componentClosed = new EventEmitter<void>();
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
            this.componentClosed.emit();
            this.handler.close();
        }
    }
}
