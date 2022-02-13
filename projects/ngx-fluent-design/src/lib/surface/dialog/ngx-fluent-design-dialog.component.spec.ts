import { NgxFluentDesignDialogComponent } from './ngx-fluent-design-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignCtaModule } from '../../cta/ngx-fluent-design-cta.module';
import { NgxFluentDesignIconModule } from '../../icons/ngx-fluent-design-icon.module';
import { bySpecAttribute } from '../../../testing/test-helper';
import SpyInstance = jest.SpyInstance;

const spyOn = jest.spyOn;

xdescribe('NgxFluentDesignDialogComponent', () => {
    // let fixture: ComponentFixture<NgxFluentDesignDialogComponent>;
    // let component: NgxFluentDesignDialogComponent;
    //
    // let closedIconClickedEventSpy: SpyInstance;
    // let primaryActionClickedEventSpy: SpyInstance;
    // let secondaryActionClickedEventSpy: SpyInstance;
    //
    // beforeEach(() => {
    //     TestBed.configureTestingModule({
    //         declarations: [NgxFluentDesignDialogComponent],
    //         imports: [
    //             NgxFluentDesignCtaModule,
    //             NgxFluentDesignIconModule
    //         ]
    //     })
    //         .compileComponents()
    //         .then(() => {
    //             fixture = TestBed.createComponent(NgxFluentDesignDialogComponent);
    //             component = fixture.componentInstance;
    //
    //             closedIconClickedEventSpy = spyOn(component.closeIconClicked, 'emit');
    //             primaryActionClickedEventSpy = spyOn(component.primaryActionClicked, 'emit');
    //             secondaryActionClickedEventSpy = spyOn(component.secondaryActionClicked, 'emit');
    //
    //             fixture.detectChanges();
    //         });
    // });
    //
    // describe('Given the NgxFluentDesignDialogComponent initialises', () => {
    //     describe('When there is no Secondary Action CTA', () => {
    //
    //         beforeEach(() => {
    //             component.displaySecondaryAction = false;
    //             fixture.detectChanges();
    //         });
    //
    //         it('Then it does not appear on the DOM', () => {
    //             const secondaryActionCta = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action-secondary'));
    //
    //             expect(secondaryActionCta).toBeNull();
    //         });
    //     });
    //
    //     describe('When the Secondary Action CTA is active', () => {
    //
    //         describe('When the Secondary Action CTA is clicked', () => {
    //             beforeEach(() => {
    //                 const secondaryActionCta = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action-secondary'))
    //                     .componentInstance;
    //
    //                 component.displaySecondaryAction = true;
    //                 secondaryActionCta.clicked.emit();
    //
    //                 fixture.detectChanges();
    //             });
    //
    //             it('Then the secondaryActionClicked event is fired', () => {
    //                 expect(secondaryActionClickedEventSpy).toHaveBeenCalledWith();
    //             });
    //         });
    //     });
    //
    //     describe('When the Close Icon is enabled', () => {
    //
    //         beforeEach(() => {
    //             component.displayCloseIcon = true;
    //             fixture.detectChanges();
    //         });
    //
    //         describe('When the Close Icon is clicked', () => {
    //
    //             beforeEach(() => {
    //                 const closedIcon = fixture.debugElement.query(bySpecAttribute('ngx-fluent-design-close-icon'));
    //                 closedIcon.nativeElement.click();
    //
    //                 fixture.detectChanges();
    //             });
    //
    //             it('Then the closeIconClicked event is emitted', () => {
    //                 expect(closedIconClickedEventSpy).toHaveBeenCalledWith();
    //             });
    //         });
    //     });
    //
    //     describe('When the Primary Action is clicked', () => {
    //
    //         beforeEach(() => {
    //             const primaryActionCta = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action-primary'))
    //                 .componentInstance;
    //             primaryActionCta.clicked.emit();
    //
    //             fixture.detectChanges();
    //         });
    //
    //         it('Then the primaryActionClicked event is emitted', () => {
    //             expect(primaryActionClickedEventSpy).toHaveBeenCalledWith();
    //         });
    //     });
    // });
});
