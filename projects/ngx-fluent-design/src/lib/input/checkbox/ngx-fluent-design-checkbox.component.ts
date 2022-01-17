import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ngx-fluent-design-checkbox',
    templateUrl: 'ngx-fluent-design-checkbox.component.html',
    styleUrls: ['ngx-fluent-design-checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxFluentDesignCheckboxComponent),
            multi: true
        }
    ]
})

export class NgxFluentDesignCheckboxComponent implements ControlValueAccessor {
    @Input() label: string;
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;

    private _controlValueAccessorChangeFn = new Function();

    onChecked(): void {
        this.checked = !this.checked;
        this._controlValueAccessorChangeFn(this.checked);
    }

    registerOnChange(fn: any): void {
        this._controlValueAccessorChangeFn = fn;
    }

    registerOnTouched(fn: any): void {
        return;
    }

    writeValue(value: boolean): void {
        this.checked = value;
    }
}
