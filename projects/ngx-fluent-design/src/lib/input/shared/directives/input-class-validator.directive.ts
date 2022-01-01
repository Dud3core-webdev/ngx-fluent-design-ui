import { Directive, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

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
export class InputClassValidatorDirective implements Validator, OnInit, OnDestroy {

    @ViewChild('fluentInputField', { static: false })
    private readonly _elementReference: ElementRef;
    private readonly _subscriptions: Subscription;
    private readonly _$formHasErrorBehaviourSubject: BehaviorSubject<boolean>;

    constructor(elementReference: ElementRef) {
        this._elementReference = elementReference;
        this._subscriptions = new Subscription();
        this._$formHasErrorBehaviourSubject = new BehaviorSubject<boolean>(false);
    }

    public ngOnInit(): void {
        this._subscriptions.add(
            this._$formHasErrorBehaviourSubject
                .subscribe({
                    next: (value: boolean): void => {
                        if (value === true) {
                            this.setErrorClassOnInput();
                        } else {
                            this.removeErrorClassOnInput();
                        }
                    }
                })
        );
    }

    public ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    public validate(control: AbstractControl): ValidationErrors | null {
        this._$formHasErrorBehaviourSubject.next(control.errors !== null && control.dirty);

        return undefined;
    }

    private setErrorClassOnInput(): void {
        this._elementReference.nativeElement.parentNode.classList.add('has-error');
    }

    private removeErrorClassOnInput(): void {
        this._elementReference.nativeElement.parentNode.classList.remove('has-error');
    }

}
