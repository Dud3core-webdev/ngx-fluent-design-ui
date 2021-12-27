import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { INgxFluentDesignInput } from "../shared/types/ngx-fluent-design-input.interface";

@Component({
    selector: 'ngx-fluent-design-multiline-input',
    templateUrl: './ngx-fluent-design-multiline-text-field.component.html',
    styleUrls: ['./ngx-fluent-design-multiline-text-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NgxFluentDesignMultilineTextFieldComponent,
            multi: true
        }
    ]
})
export class NgxFluentDesignMultilineTextFieldComponent implements ControlValueAccessor, INgxFluentDesignInput {
    @Input() public id: string;
    @Input() public label: string;
    @Input() public placeholder: string;
    @Input() public required: boolean;
    @Input() public rows: number = 5;
    @Input() public isFixed: boolean = false;

    public value: any;
    public disabled: boolean = false;

    private _onChange: Function = (value: any) => {};
    private _onTouch: Function =  () => {};

    @ViewChild('textAreaElement', { static: true }) private readonly _textAreaElement: ElementRef;

    constructor(textAreaElement: ElementRef) {
        this._textAreaElement = textAreaElement;
    }

    public registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this._onTouch = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public writeValue(obj: any): void {
        this._onChange(obj);
        this.value = obj;
    }

    public valueChanged(): void {
        this._onChange(this._textAreaElement.nativeElement.value);
    }
}
