import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { INgxFluentDesignRadio } from '../shared/types/ngx-fluent-design-radio.interface';

@Component({
    selector: 'ngx-fluent-design-radio',
    templateUrl: 'ngx-fluent-design-radio.component.html',
    styleUrls: ['ngx-fluent-design-radio.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxFluentDesignRadioComponent),
            multi: true
        }
    ]
})

export class NgxFluentDesignRadioComponent implements ControlValueAccessor, INgxFluentDesignRadio {
    @Input() name: string;
    @Input() label: string;
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
    @Input() value: any;

    private _controlValueAccessorChangeFn = new Function();

    public onChecked(): void {
        this._controlValueAccessorChangeFn(this.value);
    }

    public registerOnChange(fn: any): void {
        this._controlValueAccessorChangeFn = fn;
    }

    public registerOnTouched(fn: any): void {
        return;
    }

    public writeValue(value: boolean): void {
        this.checked = this.value === value;
    }
}
