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


    @ViewChild('fluentInputField')
    private readonly elementReference: ElementRef;
    private readonly subscriptions: Subscription;
    private readonly $formIsValidBehaviourSubject: BehaviorSubject<boolean>;

    constructor(elementReference: ElementRef) {
        this.elementReference = elementReference;
        this.subscriptions = new Subscription();
        this.$formIsValidBehaviourSubject = new BehaviorSubject<boolean>(null);
    }
    public ngOnInit(): void {
        this.subscriptions.add(
            this.$formIsValidBehaviourSubject
                .subscribe({
                    next: (value: boolean): void => {
                        console.log(value);
                    }
                })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public validate(control: AbstractControl): ValidationErrors | null {
        this.$formIsValidBehaviourSubject.next(control.valid);
        return {};
    }

}
