import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { INgxFluentDesignCheckbox } from '../shared/types/ngx-fluent-design-checkbox.interface';

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

export class NgxFluentDesignCheckboxComponent implements ControlValueAccessor, INgxFluentDesignCheckbox {
    @Input() label: string;
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
    @Input() e2eSuffix: string = 'unspecified-checkbox';

    private _controlValueAccessorChangeFn = new Function();

    public onChecked(): void {
        this.checked = !this.checked;
        this._controlValueAccessorChangeFn(this.checked);
    }

    public registerOnChange(fn: any): void {
        this._controlValueAccessorChangeFn = fn;
    }

    public registerOnTouched(fn: any): void {
        return;
    }

    public writeValue(value: boolean): void {
        this.checked = value;
    }
}
