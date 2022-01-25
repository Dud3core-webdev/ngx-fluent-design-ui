import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxFluentDesignIconInfoWarn } from '../../../../projects/ngx-fluent-design/src/lib/icons/shared/constants/ngx-fluent-design-icons-list';

@Component({
    templateUrl: './mobile-test.page.component.html',
    styleUrls: ['./mobile-test.page.component.scss']
})
export class MobileTestPageComponent {
    testForm = new FormGroup({
        checkboxEnabled: new FormControl(''),
        checkboxDisabled: new FormControl(true),
        radio: new FormControl('Radio disabled value'),
    });

    tesIconList = {
        warningIcon: NgxFluentDesignIconInfoWarn
    };

    public exampleAlert(componentType: string): void {
        window.alert(`This is a ${componentType} click event`);
    }
}
