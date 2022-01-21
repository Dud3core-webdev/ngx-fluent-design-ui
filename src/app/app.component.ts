import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
}
