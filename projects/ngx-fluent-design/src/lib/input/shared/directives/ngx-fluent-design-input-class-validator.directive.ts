import { Directive, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[ngxFluentDesignInput]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: NgxFluentDesignInputClassValidatorDirective,
            multi: true
        }
    ]
})
export class NgxFluentDesignInputClassValidatorDirective implements Validator {

    @ViewChild('fluentInputField', { static: false })
    private readonly _elementReference: ElementRef;

    constructor(elementReference: ElementRef) {
        this._elementReference = elementReference;
    }

    public validate(control: AbstractControl): ValidationErrors | null {
        if (control.errors && control.value?.length > 0) {
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
