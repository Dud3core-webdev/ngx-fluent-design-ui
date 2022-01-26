import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[ngxFluentDesignLinkButton]'
})
export class NgxFluentDesignButtonLinkDirective {

    protected _elementClass: Array<string> = [];

    @Input('class')
    @HostBinding('class')
    public get elementClass(): string {
        return this._elementClass.join(' ');
    }

    public set elementClass(value: string){
        this._elementClass = value.split(' ');
    }

    constructor() {
        this._elementClass = this._elementClass.concat('ngx-fluent-design-link-button');
    }
}
