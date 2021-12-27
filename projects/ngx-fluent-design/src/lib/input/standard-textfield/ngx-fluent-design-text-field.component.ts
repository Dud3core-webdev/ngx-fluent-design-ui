import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';

@Component({
    selector: 'ngx-fluent-design-standard-input',
    templateUrl: './ngx-fluent-design-text-field.component.html',
    styleUrls: ['./ngx-fluent-design-text-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxFluentDesignTextFieldComponent),
            multi: true
        }
    ]
})
export class NgxFluentDesignTextFieldComponent implements ControlValueAccessor, INgxFluentDesignInput {

    @Input() public id: string;
    @Input() public label: string;
    @Input() public placeholder: string;
    @Input() public type: 'number' | 'password' | 'text';
    @Input() public required: boolean;

    public value: any = '';
    public disabled: boolean = false;
    public hasError: boolean = false;

    private _onChange: (value: any) => {};
    private _onTouch: () => {};

    @ViewChild('inputField', {static: true}) private readonly _inputFieldElement: ElementRef;

    constructor(elementRef: ElementRef) {
        this._inputFieldElement = elementRef;
    }

    public registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this._onTouch = fn;
    }

    public writeValue(obj: any): void {
        this.value = obj;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public valueChanged(): void {
        this._onChange(this._inputFieldElement.nativeElement.value);
    }
}
