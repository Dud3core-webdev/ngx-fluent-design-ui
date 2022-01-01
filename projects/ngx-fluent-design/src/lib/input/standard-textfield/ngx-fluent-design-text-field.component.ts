import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-fluent-design-standard-input',
  templateUrl: './ngx-fluent-design-text-field.component.html',
  styleUrls: ['./ngx-fluent-design-text-field.component.scss']
})
export class NgxFluentDesignTextFieldComponent {
  @Input() public label: string;

  public readonly id: string = '';

  constructor() {
  }
}

