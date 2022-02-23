import { Component, EventEmitter, HostListener, Inject, Input, OnInit } from '@angular/core';
import { NgxFluentDesignModalHandler } from './modal-handler.helper';
import { DOCUMENT } from '@angular/common';
import { NgxFluentDesignCommonAnimations } from '../animations/ngx-fluent-design.animations';
import { NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator } from '../orchestrators/ngx-fluent-design-surface-handler-body-styles.orchestrator';
import { INgxFluentDesignSurface } from '../types/ngx-fluent-design-surface.interface';

@Component({
    selector: 'ngx-fluent-design-modal',
    templateUrl: './ngx-fluent-design-modal.component.html',
    styleUrls: ['./ngx-fluent-design-modal.component.scss'],
    animations: [
        NgxFluentDesignCommonAnimations.FadeInAnimation('150ms', '150ms')
    ]
})
export class NgxFluentDesignModalComponent implements INgxFluentDesignSurface, OnInit {
    @Input() public handler: NgxFluentDesignModalHandler;
    @Input() public canDismissWithOuterContent: boolean = true;

    public readonly componentClosed: EventEmitter<void>;

    private _orchestrator: NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator;
    private readonly _document: Document;

    constructor(@Inject(DOCUMENT) document: Document) {
        this._document = document;
        this.componentClosed = new EventEmitter<void>();
    }

    public ngOnInit(): void {
        this._orchestrator = new NgxFluentDesignSurfaceHandlerBodyStylesOrchestrator(this.handler, this._document, ['no-scroll']);
        this._orchestrator.onInit();
    }

    @HostListener('document:keydown.escape')
    public dismissModal(): void {
        if (this.canDismissWithOuterContent) {
            this.closeModal();
        }
    }

    public handleCloseClickEvent(): void {
        if (this.canDismissWithOuterContent) {
            this.closeModal();
        }
    }

    private closeModal(): void {
        this.handler.close();
        this.componentClosed.emit();
    }
}
