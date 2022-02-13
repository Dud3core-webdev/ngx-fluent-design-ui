import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgxFluentDesignSheetHandler } from './sheet-handler.helper';
import { ComponentHandlerBodyClassOrchestrator } from '../../common/orchestrators/component-handler-body-class.orchestrator';
import { NgxFluentDesignCommonAnimations } from '../../common/animations/ngx-fluent-design.animations';

@Component({
    selector: 'ngx-fluent-design-sheet',
    templateUrl: './ngx-fluent-design-sheet.component.html',
    styleUrls: ['./ngx-fluent-design-sheet.component.scss'],
    animations: [
        NgxFluentDesignCommonAnimations.FadeInAnimation('150ms', '150ms')
    ]
})
export class NgxFluentDesignSheetComponent implements OnInit, OnDestroy {

    @Input() public handler: NgxFluentDesignSheetHandler;
    @Input() public canDismissWithOuterContent: boolean = true;

    @Output() public readonly outerContentClicked: EventEmitter<void>;

    private readonly _document: Document;
    private _orchestrator: ComponentHandlerBodyClassOrchestrator;

    constructor(@Inject(DOCUMENT) document: Document) {
        this.outerContentClicked = new EventEmitter<void>();
        this._document = document;
    }

    public ngOnInit(): void {
        this._orchestrator = new ComponentHandlerBodyClassOrchestrator(this.handler, this._document);
        this._orchestrator.onInit();
    }

    public ngOnDestroy(): void {
        this._orchestrator.onDestroy();
    }

    public handleClickEvent(): void {
        if (this.canDismissWithOuterContent) {
            this.outerContentClicked.emit();
            this.handler.close();
        }
    }
}
