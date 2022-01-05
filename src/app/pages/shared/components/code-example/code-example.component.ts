import { Component, Input } from '@angular/core';

@Component({
    selector: 'code-example',
    templateUrl: './code-example.component.html',
    styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent {
    @Input() public codeExampleUrl: string;
    @Input() public title: string;
}
