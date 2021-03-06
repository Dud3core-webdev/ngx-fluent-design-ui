import { ComponentFixture, TestBed } from '@angular/core/testing';
import { bySpecAttribute } from '../../../testing/test-helper';
import { NgxFluentDesignMessageBarComponent } from './ngx-fluent-design-message-bar.component';
import { NgxFluentDesignCtaModule } from '../../cta/ngx-fluent-design-cta.module';
import { NgxFluentDesignIconModule } from '../../icons/ngx-fluent-design-icon.module';
import SpyInstance = jest.SpyInstance;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFluentDesignMessageBarHandler } from './message-bar-handler.helper';

describe('NgxFluentDesignMessageBarComponent', () => {
    let component: NgxFluentDesignMessageBarComponent;
    let fixture: ComponentFixture<NgxFluentDesignMessageBarComponent>;

    let dismissClickedEventSpy: SpyInstance;
    let actionClickedEventSpy: SpyInstance;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignMessageBarComponent],
            imports: [
                NgxFluentDesignCtaModule,
                NgxFluentDesignIconModule,
                BrowserAnimationsModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignMessageBarComponent);
        component = fixture.componentInstance;
        actionClickedEventSpy = jest.spyOn(component.actionClicked, 'emit');
        dismissClickedEventSpy = jest.spyOn(component.closeClicked, 'emit');
        fixture.detectChanges();
    });

    describe('Given the message bar component initialises', () => {
        describe('And the "action" and "dismiss" CTAs are disabled', () => {
            beforeEach(() => {
                component.canDismiss = false;
                fixture.detectChanges();
            });

            it('Then the message bar should not display the "action" button', () => {
                const actionButton = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action'));
                expect(actionButton).toBeNull();
            });
            it('Then the message bar should not display the "dismiss" CTA', () => {
                const dismissCTA = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-dismiss-CTA'));
                expect(dismissCTA).toBeNull();
            });
        });

        describe('When "action" and "dismiss" CTAs are enabled', () => {
            beforeEach(() => {
                component.actionName = 'Hello';
                component.handler = new NgxFluentDesignMessageBarHandler(true);
                component.canDismiss = true;
                fixture.detectChanges();
            });

            it('Then the message bar should display the "action" button', () => {
                const actionButton = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action'));
                expect(actionButton).not.toBeNull();
            });

            it('Then the message bar should display the "dismiss" CTA', () => {
                const dismissCTA = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-dismiss-CTA'));
                expect(dismissCTA).not.toBeNull();
            });

            describe('When the user clicks on the "action" button', () => {
                beforeEach(() => {
                    const actionButton = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action')).componentInstance;
                    actionButton.clicked.emit();
                });

                it('Then the actionClickedEvent should emit', () => {
                    expect(actionClickedEventSpy).toHaveBeenCalled();
                });
            });

            describe('When the user clicks on the "dismiss" CTA', () => {
                beforeEach(() => {
                    const dismissCTA = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-dismiss-CTA')).nativeElement;
                    dismissCTA.click();
                });

                it('Then the actionClickedEvent should emit', () => {
                    expect(dismissClickedEventSpy).toHaveBeenCalled();
                });
            });
        });

        describe('When the handler is not present', () => {
            beforeEach(() => {
                component.actionName = 'Hello';
                fixture.detectChanges();
            });

            it('Then the close icon cannot be displayed', () => {
                expect(component.canDisplayCloseLogo).toBe(false);
            });

            it('Then the close icon is not displayed on the DOM', () => {
                const dismissCTA = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-dismiss-CTA'));
                expect(dismissCTA).toBeNull();
            });

            it('Then the action bar can still be displayed', () => {
                const actionButton = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action')).componentInstance;

                expect(actionButton).toBeDefined();
            });

            it('Then the actionClickedEvent should emit', () => {
                const actionButton = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action')).componentInstance;
                actionButton.clicked.emit();

                expect(actionClickedEventSpy).toHaveBeenCalled();
            });
        });

        describe('When the handler is defaulted to false', () => {

            let container;

            beforeEach(() => {
                component.actionName = 'Hello';
                component.handler = new NgxFluentDesignMessageBarHandler(false);
                component.handler.close();
                fixture.detectChanges();

                container = fixture.debugElement.query(bySpecAttribute('ngx-fluent-design-message-bar'));
            });

            it('Then the entire component isn\'t present', () => {
                expect(container.nativeElement.style.visibility).toBe('hidden');
            });

            describe('And the handler state is changed', () => {
                beforeEach(() => {
                    component.handler.open();
                    fixture.detectChanges();

                    container = fixture.debugElement.query(bySpecAttribute('ngx-fluent-design-message-bar'));
                });

                it('Then the entire component is visible', () => {
                    expect(container.nativeElement.style.visibility).toBe('visible');
                });
            });
        });
    });
});
