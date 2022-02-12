import { Directive, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

@Directive({
    selector: '[ngxFluentDesignLinkButton]'
})
export class NgxFluentDesignButtonLinkDirective {
    @ViewChild('fluentActionLinkButton', { static: false })
    private readonly _elementReference: ElementRef;

    constructor(elementReference: ElementRef) {
        this._elementReference = elementReference;
        this._elementReference.nativeElement.classList.add('ngx-fluent-design-link-button');
    }
}
