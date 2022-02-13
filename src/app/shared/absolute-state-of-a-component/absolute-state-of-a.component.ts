import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxFluentDesignIconInfoWarn } from '../../../../projects/ngx-fluent-design/src/lib/icons/shared/constants/ngx-fluent-design-icons-list';
import { NgxFluentDesignPanelHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/panel/panel-handler.helper';
import { NgxFluentDesignDialogHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/dialog/dialog-handler.helper';
import { NgxFluentDesignModalHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/modal/modal-handler.helper';
import { NgxFluentDesignSheetHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/sheet/sheet-handler.helper';

@Component({
    selector: 'absolute-mess',
    templateUrl: './absolute-state-of-a.component.html'
})
export class AbsoluteStateOfAComponent implements AfterViewInit {
    public progressIndicatorCurrentValue: number = 0;
    public isToggled: boolean = false;
    public inputsDisabled: boolean = false;
    public buttonLinkDisabled: boolean = false;
    public panelHandler: NgxFluentDesignPanelHandler = new NgxFluentDesignPanelHandler(false);
    public dialogHandler: NgxFluentDesignDialogHandler = new NgxFluentDesignDialogHandler(false);
    public modalHandler: NgxFluentDesignModalHandler = new NgxFluentDesignModalHandler(false);
    public sheetHandler: NgxFluentDesignSheetHandler = new NgxFluentDesignSheetHandler(false);

    testForm = new FormGroup({
        checkboxEnabled: new FormControl(''),
        checkboxDisabled: new FormControl(true),
        radio: new FormControl('Radio disabled value')
    });

    testFormTextAreaForm = new FormGroup({
        bordered: new FormControl(null, [Validators.required, Validators.minLength(12)]),
        bottomBorder: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(12)]),
        borderless: new FormControl(null, [Validators.required])
    });

    sheetAlignmentForm = new FormGroup({
        sheetContentAlignment: new FormControl('middle')
    });

    tesIconList = {
        warningIcon: NgxFluentDesignIconInfoWarn
    };

    ngAfterViewInit(): void {
        this.exampleProgressLoad();
    }

    public exampleProgressLoad(percentage = 0): void {
        if (percentage >= 100) {
            return;
        }
        this.progressIndicatorCurrentValue = percentage;
        requestAnimationFrame(() => this.exampleProgressLoad(this.progressIndicatorCurrentValue + 0.05));
    }


    public exampleAlert(componentType: string): void {
        window.alert(`This is a ${componentType} click event`);
    }

    public toggleInputDisabled(): void {
        this.inputsDisabled = !this.inputsDisabled;
    }

    public setSheetAlignment(): void {
    }
}
