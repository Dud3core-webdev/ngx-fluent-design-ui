import { ComponentFixture, TestBed } from '@angular/core/testing';
import { bySpecAttribute } from '../../../testing/test-helper';
import { NgxFluentDesignToggleComponent } from './ngx-fluent-design-toggle.component';
import SpyInstance = jest.SpyInstance;

describe('NgxFluentDesignToggleComponent', () => {
    let component: NgxFluentDesignToggleComponent;
    let fixture: ComponentFixture<NgxFluentDesignToggleComponent>;

    let toggleOnEventSpy: SpyInstance;
    let toggleOffEventSpy: SpyInstance;
    let changeEventSpy: SpyInstance;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignToggleComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignToggleComponent);
        component = fixture.componentInstance;
        toggleOnEventSpy = jest.spyOn(component.toggleOnEvent, 'emit');
        toggleOffEventSpy = jest.spyOn(component.toggleOffEvent, 'emit');
        changeEventSpy = jest.spyOn(component.changeEvent, 'emit');
        fixture.detectChanges();
    });

    describe('Given the toggle initialises', () => {
        describe('When it has not been interacted with yet', () => {
            it('Then it should not be toggled', () => {
                const toggle = fixture.debugElement.query(bySpecAttribute('fluent-design-toggle')).nativeElement;
                expect(toggle.checked).not.toBeTruthy();
            });

            it('Then it should not be disabled', () => {
                const toggle = fixture.debugElement.query(bySpecAttribute('fluent-design-toggle')).nativeElement;
                expect(toggle.disabled).not.toBeTruthy();
            });
        });
        describe('When it was clicked with a previous state being: toggled', () => {
            beforeEach(() => {
                component.toggled = true;
                fixture.detectChanges();
                const toggle = fixture.debugElement.query(bySpecAttribute('fluent-design-toggle')).nativeElement;
                toggle.click();
            });

            it('Then it should change state to: not toggled', () => {
                const toggle = fixture.debugElement.query(bySpecAttribute('fluent-design-toggle')).nativeElement;
                expect(toggle.checked).not.toBeTruthy();
            });

            it('Then the toggleOff event should emit', () => {
                expect(toggleOffEventSpy).toHaveBeenCalled();
            });

            it('Then the change event should emit', () => {
                expect(changeEventSpy).toHaveBeenCalled();
            });

        });
        describe('When it was clicked with a previous state being: not toggled', () => {
            beforeEach(() => {
                component.toggled = false;
                fixture.detectChanges();
                const toggle = fixture.debugElement.query(bySpecAttribute('fluent-design-toggle')).nativeElement;
                toggle.click();
            });
            it('Then it should change state to: toggled', () => {
                const toggle = fixture.debugElement.query(bySpecAttribute('fluent-design-toggle')).nativeElement;
                expect(toggle.checked).toBeTruthy();
            });

            it('Then the toggleOn event should emit', () => {
                expect(toggleOnEventSpy).toHaveBeenCalled();
            });

            it('Then the change event should emit', () => {
                expect(changeEventSpy).toHaveBeenCalled();
            });
        });
        describe('When it is disabled and it is clicked', () => {
            beforeEach(() => {
                component.disabled = true;
                component.toggled = true;
                fixture.detectChanges();
            });
            it('Then the toggle state should not change', () => {
                const toggle = fixture.debugElement.query(bySpecAttribute('fluent-design-toggle')).nativeElement;
                toggle.click();

                expect(toggle.checked).toBeTruthy();
            });

            it('Then the change event should not emit', () => {
                expect(changeEventSpy).not.toHaveBeenCalled();
            });
        });
    });
});
