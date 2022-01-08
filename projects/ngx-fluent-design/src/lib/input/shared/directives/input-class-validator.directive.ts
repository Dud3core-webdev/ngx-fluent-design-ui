import { Directive, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[ngxFluentDesignInput]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: InputClassValidatorDirective,
            multi: true
        }
    ]
})
export class InputClassValidatorDirective implements Validator {

    @ViewChild('fluentInputField', { static: false })
    private readonly _elementReference: ElementRef;

    constructor(elementReference: ElementRef) {
        this._elementReference = elementReference;
    }

    public validate(control: AbstractControl): ValidationErrors | null {
        if (control.errors && (control.dirty || control.touched)) {
            this.setErrorClassOnInput();
        } else {
            this.removeErrorClassOnInput();
        }

        return undefined;
    }

    private setErrorClassOnInput(): void {
        this._elementReference.nativeElement.parentNode.classList.add('has-error');
    }

    private removeErrorClassOnInput(): void {
        this._elementReference.nativeElement.parentNode.classList.remove('has-error');
    }

}
