import { Directive, ElementRef, ViewChild } from '@angular/core';

@Directive({
    selector: '[ngxFluentDesignActionButton]'
})
export class NgxFluentDesignActionButtonDirective {
    @ViewChild('fluentActionLinkButton', { static: false })
    private readonly _elementReference: ElementRef;

    constructor(elementReference: ElementRef) {
        this._elementReference = elementReference;
        this._elementReference.nativeElement.classList.add('ngx-fluent-design-action-button');
    }
}
