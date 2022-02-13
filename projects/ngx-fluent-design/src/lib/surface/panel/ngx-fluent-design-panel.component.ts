import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignIconClearClose } from '../../icons/shared/constants/ngx-fluent-design-icons-list';
import { NgxFluentDesignPanelHandler } from './panel-handler.helper';
import { ComponentHandlerBodyClassOrchestrator } from '../../common/orchestrators/component-handler-body-class.orchestrator';
import { DOCUMENT } from '@angular/common';
import { NgxFluentDesignCommonAnimations } from '../../common/animations/fade-in.animation';

@Component({
    selector: 'ngx-fluent-design-panel',
    templateUrl: './ngx-fluent-design-panel.component.html',
    styleUrls: ['./ngx-fluent-design-panel.component.scss'],
    animations: [
        NgxFluentDesignCommonAnimations.SlideInFromRightAnimation('150ms', '150ms'),
    ]
})
export class NgxFluentDesignPanelComponent implements OnInit, OnDestroy {
    @Input() public displayCloseIcon: boolean = true;
    @Input() public header: string;
    @Input() public handler: NgxFluentDesignPanelHandler;

    public readonly closeIcon: INgxFluentDesignIcon = NgxFluentDesignIconClearClose;

    private _orchestrator: ComponentHandlerBodyClassOrchestrator;
    private readonly _document: Document;

    constructor(@Inject(DOCUMENT) document: Document) {
        this._document = document;
    }

    public ngOnInit(): void {
        this._orchestrator = new ComponentHandlerBodyClassOrchestrator(this.handler, this._document);
        this._orchestrator.onInit();
    }

    public ngOnDestroy(): void {
        this._orchestrator.onDestroy();
    }
}
