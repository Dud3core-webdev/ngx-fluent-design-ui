import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxFluentDesignIconInfoWarn } from '../../../../projects/ngx-fluent-design/src/lib/icons/shared/constants/ngx-fluent-design-icons-list';

@Component({
    selector: 'absolute-mess',
    templateUrl: './absolute-state-of-a.component.html',
    styleUrls: ['./absolute-state-of-a.component.scss']
})
export class AbsoluteStateOfAComponent {
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
