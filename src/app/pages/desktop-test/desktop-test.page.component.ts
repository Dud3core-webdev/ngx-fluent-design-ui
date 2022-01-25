import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxFluentDesignIconInfoWarn } from '../../../../projects/ngx-fluent-design/src/lib/icons/shared/constants/ngx-fluent-design-icons-list';

@Component({
    templateUrl: './desktop-test.page.component.html',
    styleUrls: ['./desktop-test.page.component.scss']
})
export class DesktopTestPageComponent implements AfterViewInit {
    public progressIndicatorCurrentValue: number = 0;

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

    public exampleAlert(componentType: string): void {
        window.alert(`This is a ${componentType} click event`);
    }

    public exampleProgressLoad(percentage = 0): void {
        if (percentage >= 100) {
            return;
        }
        this.progressIndicatorCurrentValue = percentage;
        requestAnimationFrame(() => this.exampleProgressLoad(this.progressIndicatorCurrentValue + 0.05));
    }
}
