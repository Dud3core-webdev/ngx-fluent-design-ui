import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxFluentDesignIconInfoWarn } from '../../../../projects/ngx-fluent-design/src/lib/icons/shared/constants/ngx-fluent-design-icons-list';

@Component({
    selector: 'absolute-mess',
    templateUrl: './absolute-state-of-a.component.html',
    styleUrls: ['./absolute-state-of-a.component.scss']
})
export class AbsoluteStateOfAComponent implements AfterViewInit {
    public progressIndicatorCurrentValue: number = 0;
    public isToggled: boolean = false;
    public inputsDisabled: boolean = false;

    testForm = new FormGroup({
        checkboxEnabled: new FormControl(''),
        checkboxDisabled: new FormControl(true),
        radio: new FormControl('Radio disabled value'),
    });

    tesIconList = {
        warningIcon: NgxFluentDesignIconInfoWarn
    };

    ngAfterViewInit(): void {
        this.exampleProgressLoad();
    }

    public exampleProgressLoad(percentage = 0): void {
        if (percentage >= 100) {
            return;
        }
        this.progressIndicatorCurrentValue = percentage;
        requestAnimationFrame(() => this.exampleProgressLoad(this.progressIndicatorCurrentValue + 0.05));
    }


    public exampleAlert(componentType: string): void {
        window.alert(`This is a ${componentType} click event`);
    }

    public toggleInputDisabled(): void {
        this.inputsDisabled = !this.inputsDisabled;
    }
}
