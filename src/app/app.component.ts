import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public testFormGroup: FormGroup = new FormGroup({
    'standardInput': new FormControl(null, [Validators.required])
  });

}
