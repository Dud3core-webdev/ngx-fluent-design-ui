import { Directive, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[ngxFluentDesignInput]'
})
export class NgxFluentDesignInputClassValidatorDirective {
    private readonly _ngControl: NgControl;

    constructor(ngControl: NgControl) {
        this._ngControl = ngControl;
    }

    @HostBinding('class.has-error')
    public get hasError(): boolean {
        if (this._ngControl.pending) {
            return this._ngControl.dirty;
        }
        return !this._ngControl.pending && this._ngControl.invalid && (this._ngControl.dirty ||
            (this._ngControl.control.validator === null && this._ngControl.control.asyncValidator !== null));
    }
}
