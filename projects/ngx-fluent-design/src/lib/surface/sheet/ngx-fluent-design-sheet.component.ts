import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DOCUMENT, NgClass, NgStyle } from '@angular/common';
import { NgxFluentDesignSheetHandler } from './sheet-handler.helper';
import { NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator } from '../orchestrators/ngx-fluent-design-surface-handler-body-styles.orchestrator';
import { ngxFluentDesignFadeInTrigger } from '../animations/ngx-fluent-design.animations';
import { INgxFluentDesignSheet } from './ngx-fluent-design-sheet.interface';

export declare type NgxFluentDesignSheetContentAlignment = 'middle' | 'left' | 'right';

@Component({
    selector: 'ngx-fluent-design-sheet',
    templateUrl: './ngx-fluent-design-sheet.component.html',
    styleUrls: ['./ngx-fluent-design-sheet.component.scss'],
    animations: [ngxFluentDesignFadeInTrigger],
    imports: [NgClass, NgStyle]
})
export class NgxFluentDesignSheetComponent implements OnInit, OnDestroy, INgxFluentDesignSheet {

    @Input() public handler: NgxFluentDesignSheetHandler;
    @Input() public canDismissWithOuterContent: boolean = true;
    @Input() public alignContent: NgxFluentDesignSheetContentAlignment = 'middle';

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
