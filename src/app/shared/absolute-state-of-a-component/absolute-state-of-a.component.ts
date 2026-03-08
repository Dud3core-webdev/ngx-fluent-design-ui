import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFluentDesignIconInfoWarn } from '../../../../projects/ngx-fluent-design/src/lib/icons/shared/constants/ngx-fluent-design-icons-list';
import { NgxFluentDesignPanelHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/panel/panel-handler.helper';
import { NgxFluentDesignDialogHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/dialog/dialog-handler.helper';
import { NgxFluentDesignModalHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/modal/modal-handler.helper';
import { NgxFluentDesignSheetHandler } from '../../../../projects/ngx-fluent-design/src/lib/surface/sheet/sheet-handler.helper';
import { MessageBarType } from '../../../../projects/ngx-fluent-design/src/lib/notifications/types/message-bar.type';
import { NgxFluentDesignCardComponent } from '../../../../projects/ngx-fluent-design/src/lib/surface/card/ngx-fluent-design-card.component';
import { NgxFluentDesignCheckboxComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/checkbox/ngx-fluent-design-checkbox.component';
import { NgxFluentDesignRadioComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/radio/ngx-fluent-design-radio.component';
import { NgxFluentDesignToggleComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/toggle/ngx-fluent-design-toggle.component';
import { JsonPipe } from '@angular/common';
import { NgxFluentDesignButtonLinkDirective } from '../../../../projects/ngx-fluent-design/src/lib/cta/link-button/ngx-fluent-design-button-link.directive';
import { NgxFluentDesignActionButtonDirective } from '../../../../projects/ngx-fluent-design/src/lib/cta/action-button/ngx-fluent-design-action-button.directive';
import { NgxFluentDesignMessageBarComponent } from '../../../../projects/ngx-fluent-design/src/lib/notifications/message-bar/ngx-fluent-design-message-bar.component';
import { NgxFluentDesignButtonComponent } from '../../../../projects/ngx-fluent-design/src/lib/cta/standard-button/ngx-fluent-design-button.component';
import { NgxFluentDesignCompoundButtonComponent } from '../../../../projects/ngx-fluent-design/src/lib/cta/compound-button/ngx-fluent-design-compound-button.component';
import { NgxFluentDesignSpinnerComponent } from '../../../../projects/ngx-fluent-design/src/lib/progress/spinner/ngx-fluent-design-spinner.component';
import { NgxFluentDesignProgressIndicatorComponent } from '../../../../projects/ngx-fluent-design/src/lib/progress/progress-indicator/ngx-fluent-design-progress-indicator.component';
import { NgxFluentDesignProgressIndicatorIndeterminateComponent } from '../../../../projects/ngx-fluent-design/src/lib/progress/progress-indicator-indeterminate/ngx-fluent-design-progress-indicator-indeterminate.component';
import { NgxFluentDesignIconComponent } from '../../../../projects/ngx-fluent-design/src/lib/icons/icon-component/icon.component';
import { NgxFluentDesignFormFieldComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/standard-textfield/ngx-fluent-design-form-field.component';
import { NgxFluentDesignInputClassValidatorDirective } from '../../../../projects/ngx-fluent-design/src/lib/input/shared/directives/ngx-fluent-design-input-class-validator.directive';
import { NgxFluentDesignFormFieldUnderlinedComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/text-field-underlined/ngx-fluent-design-text-field-underlined.component';
import { NgxFluentDesignTextFieldBorderlessComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/text-field-borderless/ngx-fluent-design-text-field-borderless.component';
import { NgxFluentDesignSelectComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/select/ngx-fluent-design-select.component';
import { NgxFluentDesignTextareaComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/standard-textarea/ngx-fluent-design-textarea.component';
import { NgxFluentDesignTextareaUnderlinedComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/textarea-underlined/ngx-fluent-design-textarea-underlined.component';
import { NgxFluentDesignTextareaBorderlessComponent } from '../../../../projects/ngx-fluent-design/src/lib/input/textarea-borderless/ngx-fluent-design-textarea-borderless.component';
import { NgxFluentDesignPanelComponent } from '../../../../projects/ngx-fluent-design/src/lib/surface/panel/ngx-fluent-design-panel.component';
import { NgxFluentDesignDialogComponent } from '../../../../projects/ngx-fluent-design/src/lib/surface/dialog/ngx-fluent-design-dialog.component';
import { NgxFluentDesignModalComponent } from '../../../../projects/ngx-fluent-design/src/lib/surface/modal/ngx-fluent-design-modal.component';

@Component({
    selector: 'absolute-mess',
    templateUrl: './absolute-state-of-a.component.html',
    imports: [NgxFluentDesignCardComponent, FormsModule, ReactiveFormsModule, NgxFluentDesignCheckboxComponent, NgxFluentDesignRadioComponent, NgxFluentDesignToggleComponent, NgxFluentDesignButtonLinkDirective, NgxFluentDesignActionButtonDirective, NgxFluentDesignMessageBarComponent, NgxFluentDesignButtonComponent, NgxFluentDesignCompoundButtonComponent, NgxFluentDesignSpinnerComponent, NgxFluentDesignProgressIndicatorComponent, NgxFluentDesignProgressIndicatorIndeterminateComponent, NgxFluentDesignIconComponent, NgxFluentDesignFormFieldComponent, NgxFluentDesignInputClassValidatorDirective, NgxFluentDesignFormFieldUnderlinedComponent, NgxFluentDesignTextFieldBorderlessComponent, NgxFluentDesignSelectComponent, NgxFluentDesignTextareaComponent, NgxFluentDesignTextareaUnderlinedComponent, NgxFluentDesignTextareaBorderlessComponent, NgxFluentDesignPanelComponent, NgxFluentDesignDialogComponent, NgxFluentDesignModalComponent, JsonPipe]
})
export class AbsoluteStateOfAComponent implements AfterViewInit {
    public progressIndicatorCurrentValue: number = 0;
    public isToggled: boolean = false;
    public inputsDisabled: boolean = false;
    public buttonLinkDisabled: boolean = false;
    public panelHandler: NgxFluentDesignPanelHandler = new NgxFluentDesignPanelHandler(false);
    public panelWithBackCtaHandler: NgxFluentDesignPanelHandler = new NgxFluentDesignPanelHandler(false);
    public panelWithFooterHandler: NgxFluentDesignPanelHandler = new NgxFluentDesignPanelHandler(false);
    public dialogHandler: NgxFluentDesignDialogHandler = new NgxFluentDesignDialogHandler(false);
    public modalHandler: NgxFluentDesignModalHandler = new NgxFluentDesignModalHandler(false);
    public sheetHandler: NgxFluentDesignSheetHandler = new NgxFluentDesignSheetHandler(false);
    public messageBarName: FormControl = new FormControl('success');

    testForm = new FormGroup({
        checkboxEnabled: new FormControl(''),
        checkboxDisabled: new FormControl(true),
        radio: new FormControl('Radio disabled value')
    });

    testFormStandardInputForm = new FormGroup({
        bordered: new FormControl(null, [Validators.required, Validators.minLength(12)]),
        bottomBorder: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(12)]),
        borderless: new FormControl(null, [Validators.required, Validators.maxLength(3)])
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
        warningIcon: NgxFluentDesignIconInfoWarn,
        iconFill: '--ngx-fluent-design-foreground-neutral-primary'
    };

    @Output()
    public displayErrorMessageBar: EventEmitter<MessageBarType> = new EventEmitter<MessageBarType>();

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
}
