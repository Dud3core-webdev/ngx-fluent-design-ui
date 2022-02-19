import { Component, Inject, Input, OnInit } from '@angular/core';
import { INgxFluentDesignIcon } from '../shared/types/ngx-fluent-design-icon.interface';
import { INgxFluentDesignIconComponent } from '../shared/types/ngx-fluent-design-icon-component.interface';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'ngx-fluent-design-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class NgxFluentDesignIconComponent implements OnInit, INgxFluentDesignIconComponent {
    @Input() public icon: INgxFluentDesignIcon;
    @Input() public fillColor: string;
    @Input() public ngxFluentDesignCssVariableName: string;
    public svgBackgroundColor: string;
    public iconViewBox: string;

    private readonly _document: Document;

    private static isNullOrUndefined(property: any): boolean {
        return property === null || typeof property === 'undefined';
    }

    constructor(@Inject(DOCUMENT) document: Document) {
        this._document = document;
    }

    public ngOnInit(): void {
        this.iconViewBox = `0 0 ${this.icon.width} ${this.icon.height}`;
        this.setIconFill();
    }

    private setIconFill(): void {
        if (NgxFluentDesignIconComponent.isNullOrUndefined(this.fillColor)) {
            this.svgBackgroundColor = getComputedStyle(this._document.body).getPropertyValue(this.ngxFluentDesignCssVariableName);
            getComputedStyle(this._document.body).getPropertyValue(this.ngxFluentDesignCssVariableName);
        } else {
            this.svgBackgroundColor = this.fillColor;
        }
    }
}
