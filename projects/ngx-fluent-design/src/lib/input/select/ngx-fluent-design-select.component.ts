import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INgxFluentDesignInput } from '../shared/types/ngx-fluent-design-input.interface';
import { NgClass } from '@angular/common';
import { NgxFluentDesignActionButtonDirective } from '../../cta/action-button/ngx-fluent-design-action-button.directive';

@Component({
    selector: 'ngx-fluent-design-select-component',
    templateUrl: './ngx-fluent-design-select.component.html',
    styleUrls: ['./ngx-fluent-design-select.component.scss'],
    imports: [NgClass, NgxFluentDesignActionButtonDirective]
})
export class NgxFluentDesignSelectComponent implements INgxFluentDesignInput {
    @Input() public disabled: boolean;
    @Input() public displayLabel: boolean;
    @Input() public id: string;
    @Input() public label: string;
    @Input() public options: Array<string>;

    @Output() public optionClicked: EventEmitter<string> = new EventEmitter<string>();

    private _currentSelectOption: string;
    private _canDisplayOptions: boolean = false;

    public get canDisplayOptions(): boolean {
        return this._canDisplayOptions;
    }

    public setCurrentSelectedOption(value: string): void {
        this.optionClicked.emit(value);
        this.toggleDisplayOptions();
        this._currentSelectOption = value;
    }

    public getCurrentSelectedOption(): string {
        return this._currentSelectOption;
    }

    public toggleDisplayOptions(): void {
        this._canDisplayOptions = !this._canDisplayOptions;
    }
}
