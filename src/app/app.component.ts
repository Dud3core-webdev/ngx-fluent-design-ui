import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { INgxFluentDesignIcon } from '../../projects/ngx-fluent-design/src/lib/icons/shared/types/ngx-fluent-design-icon.interface';
import { NgxFluentDesignIconInfoWarn } from '../../projects/ngx-fluent-design/src/lib/icons/shared/constants/ngx-fluent-design-icons-list';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
