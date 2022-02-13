import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { INgxFluentDesignModalComponent } from '../shared/types/ngx-fluent-design-modal-component.interface';
import { NgxFluentDesignModalHandler } from './modal-handler.helper';
import { FadeInAnimation } from '../../common/animations/fade-in.animation';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ngx-fluent-design-modal',
    templateUrl: './ngx-fluent-design-modal.component.html',
    styleUrls: ['./ngx-fluent-design-modal.component.scss'],
    animations: [
        FadeInAnimation('150ms', '150ms')
    ]
})
export class NgxFluentDesignModalComponent implements INgxFluentDesignModalComponent, OnInit {
    @Input() public modalHandler: NgxFluentDesignModalHandler;
    @Input() public outsideSheetCanDismissContent: boolean = true;
    public readonly sheetDismissClicked: EventEmitter<void>;

    private readonly _document: Document;
    private readonly _subscriptions: Subscription;
    private readonly _noScrollClassName: string = 'no-scroll';

    constructor(@Inject(DOCUMENT) document: Document) {
        this._document = document;
        this._subscriptions = new Subscription();

        this.sheetDismissClicked = new EventEmitter<void>();
    }

    public ngOnInit(): void {
        this._subscriptions.add(
            this.modalHandler.isOpenAsObservable
                .subscribe({
                    next: (isOpen: boolean): void => {
                        this.toggleNoScroll(isOpen);
                    }
                })
        );
    }

    public outerSheetClicked(): void {
        if (this.outsideSheetCanDismissContent) {
            this.modalHandler.close();
            this.sheetDismissClicked.emit();
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
