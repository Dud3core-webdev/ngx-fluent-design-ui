import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'ngx-fluent-design-document-card',
    templateUrl: './ngx-fluent-design-document-card.component.html',
    styleUrls: ['./ngx-fluent-design-document-card.component.scss']
})
export class NgxFluentDesignDocumentCardComponent {
    @Input() public imageSource: string = 'https://via.placeholder.com/108';

    @Output() public cardClicked: EventEmitter<void> = new EventEmitter<void>();

    public onCardClicked(): void {
        this.cardClicked.emit();
    }
}
