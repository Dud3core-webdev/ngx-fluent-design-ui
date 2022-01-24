import { ComponentFixture, TestBed } from '@angular/core/testing';
import { bySpecAttribute } from '../../../testing/test-helper';
import { NgxFluentDesignMessageBarComponent } from './ngx-fluent-design-message-bar.component';
import { NgxFluentDesignCtaModule } from '../../cta/ngx-fluent-design-cta.module';
import SpyInstance = jest.SpyInstance;

describe('NgxFluentDesignMessageBarComponent', () => {
    let component: NgxFluentDesignMessageBarComponent;
    let fixture: ComponentFixture<NgxFluentDesignMessageBarComponent>;

    let dismissClickedEventSpy: SpyInstance;
    let actionClickedEventSpy: SpyInstance;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignMessageBarComponent],
            imports: [NgxFluentDesignCtaModule]
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
                component.displayActions = false;
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
        describe('And "action" and "dismiss" CTAs are enabled', () => {
            beforeEach(() => {
                component.displayActions = true;
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

            describe('And the user clicks on the "action" button', () => {
                beforeEach(() => {
                    const actionButton = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-action')).componentInstance;
                    actionButton.clicked.emit();
                });
                it('Then the actionClickedEvent should emit', () => {
                    expect(actionClickedEventSpy).toHaveBeenCalled();
                });
            });
            describe('And the user clicks on the "dismiss" CTA', () => {
                beforeEach(() => {
                    const dismissCTA = fixture.debugElement.query(bySpecAttribute('fluent-design-message-bar-dismiss-CTA')).nativeElement;
                    dismissCTA.click();
                });
                it('Then the actionClickedEvent should emit', () => {
                    expect(dismissClickedEventSpy).toHaveBeenCalled();
                });
            });
        });
    });
});
