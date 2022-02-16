import { NgxFluentDesignDialogComponent } from './ngx-fluent-design-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignCtaModule } from '../../cta/ngx-fluent-design-cta.module';
import { NgxFluentDesignIconModule } from '../../icons/ngx-fluent-design-icon.module';
import { bySpecAttribute } from '../../../testing/test-helper';
import SpyInstance = jest.SpyInstance;
import { NgxFluentDesignDialogHandler } from './dialog-handler.helper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const spyOn = jest.spyOn;

describe('NgxFluentDesignDialogComponent', () => {
    let fixture: ComponentFixture<NgxFluentDesignDialogComponent>;
    let component: NgxFluentDesignDialogComponent;

    let closedIconClickedEventSpy: SpyInstance;
    let primaryActionClickedEventSpy: SpyInstance;
    let secondaryActionClickedEventSpy: SpyInstance;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NgxFluentDesignDialogComponent],
            imports: [
                NgxFluentDesignCtaModule,
                NgxFluentDesignIconModule,
                BrowserAnimationsModule
            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(NgxFluentDesignDialogComponent);
                component = fixture.componentInstance;

                closedIconClickedEventSpy = spyOn(component.componentClosed, 'emit');
                primaryActionClickedEventSpy = spyOn(component.primaryActionClicked, 'emit');
                secondaryActionClickedEventSpy = spyOn(component.secondaryActionClicked, 'emit');

                fixture.detectChanges();
            });
    });

    describe('Given the NgxFluentDesignDialogComponent initialises', () => {
        describe('When there is no Secondary Action CTA', () => {
            beforeEach(() => {
                component.handler = new NgxFluentDesignDialogHandler(true);
                fixture.detectChanges();
            });

            it('Then it does not appear on the DOM', () => {
                const secondaryActionCta = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action-secondary'));

                expect(secondaryActionCta).toBeNull();
            });
        });

        describe('When the Secondary Action CTA is active', () => {

            describe('When the Secondary Action CTA is clicked', () => {
                beforeEach(() => {
                    component.handler = new NgxFluentDesignDialogHandler(true);
                    component.secondaryActionName = 'What the fuck';
                    fixture.detectChanges();

                    const secondaryActionCta = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action-secondary'))
                        .componentInstance;

                    secondaryActionCta.clicked.emit();

                });

                it('Then the secondaryActionClicked event is fired', () => {
                    expect(secondaryActionClickedEventSpy).toHaveBeenCalledWith();
                });
            });
        });

        describe('When the Close Icon is enabled', () => {
            describe('When the Close Icon is clicked', () => {

                beforeEach(() => {
                    component.displayCloseIcon = true;
                    component.handler = new NgxFluentDesignDialogHandler(true);
                    fixture.detectChanges();
                });

                it('Then the closeIconClicked event is emitted', () => {
                    const closedIcon = fixture.debugElement.query(bySpecAttribute('ngx-fluent-design-close-icon'));
                    closedIcon.nativeElement.click();
                    expect(closedIconClickedEventSpy).toHaveBeenCalledWith();
                });
            });
        });

        describe('When the Primary Action is clicked', () => {

            beforeEach(() => {
                component.handler = new NgxFluentDesignDialogHandler(true);
                fixture.detectChanges();
            });

            it('Then the primaryActionClicked event is emitted', () => {
                const primaryActionCta = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action-primary'))
                    .componentInstance;
                primaryActionCta.clicked.emit();
                expect(primaryActionClickedEventSpy).toHaveBeenCalledWith();
            });
        });
    });
});
