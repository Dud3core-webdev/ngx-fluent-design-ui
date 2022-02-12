import { Component, Inject, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'ngx-fluent-design-sheet',
    templateUrl: './ngx-fluent-design-sheet.component.html',
    styleUrls: ['./ngx-fluent-design-sheet.component.scss'],
    animations: [
        trigger('fadeIn', [
            state('show', style({
                opacity: 1,
                visibility: 'visible'
            })),
            state('hide', style({
                opacity: 0,
                visibility: 'hidden'
            })),
            transition('show => hide', [
                animate('150ms')
            ]),
            transition('hide => show', [
                animate('150ms')
            ]),
        ])
    ]
})
export class NgxFluentDesignSheetComponent {

    private readonly _document: Document;
    private readonly _noScrollClassName: string = 'no-scroll';
    private _hidden: boolean = false;

    constructor(@Inject(DOCUMENT) document: Document) {
        this._document = document;
    }

    @Input()
    public set hidden(isHidden: boolean) {
        this._hidden = isHidden;
        this.toggleNoScrollBodyElement(isHidden);
    }

    public get hidden(): boolean {
        return this._hidden;
    }

    private toggleNoScrollBodyElement(isHidden: boolean): void {
        if (isHidden) {
            this._document.body.classList.remove(this._noScrollClassName);
        } else {
            this._document.body.classList.add(this._noScrollClassName);
        }
    }
}
