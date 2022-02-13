import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { INgxFluentDesignModalComponent } from '../shared/types/ngx-fluent-design-modal-component.interface';
import { NgxFluentDesignModalHandler } from './modal-handler.helper';
import { DOCUMENT } from '@angular/common';
import { NgxFluentDesignCommonAnimations } from '../../common/animations/ngx-fluent-design.animations';
import { ComponentHandlerBodyClassOrchestrator } from '../../common/orchestrators/component-handler-body-class.orchestrator';

@Component({
    selector: 'ngx-fluent-design-modal',
    templateUrl: './ngx-fluent-design-modal.component.html',
    styleUrls: ['./ngx-fluent-design-modal.component.scss'],
    animations: [
        NgxFluentDesignCommonAnimations.FadeInAnimation('150ms', '150ms')
    ]
})
export class NgxFluentDesignModalComponent implements INgxFluentDesignModalComponent, OnInit {
    @Input() public modalHandler: NgxFluentDesignModalHandler;
    @Input() public outsideSheetCanDismissContent: boolean = true;
    public readonly sheetDismissClicked: EventEmitter<void>;

    private _orchestrator: ComponentHandlerBodyClassOrchestrator;
    private readonly _document: Document;

    constructor(@Inject(DOCUMENT) document: Document) {
        this._document = document;
        this.sheetDismissClicked = new EventEmitter<void>();
    }

    public ngOnInit(): void {
        this._orchestrator = new ComponentHandlerBodyClassOrchestrator(this.modalHandler, this._document);
        this._orchestrator.onInit();
    }

    public outerSheetClicked(): void {
        if (this.outsideSheetCanDismissContent) {
            this.modalHandler.close();
            this.sheetDismissClicked.emit();
        }
    }
}
