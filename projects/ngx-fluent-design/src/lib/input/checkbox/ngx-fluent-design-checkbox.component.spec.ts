import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignCheckboxComponent } from './ngx-fluent-design-checkbox.component';
import { bySpecAttribute } from '../../../testing/test-helper';

describe('NgxFluentDesignCheckboxComponent', () => {
    let component: NgxFluentDesignCheckboxComponent;
    let fixture: ComponentFixture<NgxFluentDesignCheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignCheckboxComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Given the checkbox initialises', () => {
        describe('When it has not been interacted with yet', () => {
            it('Then it should not be checked', () => {
                const checkbox = fixture.debugElement.query(bySpecAttribute('fluent-design-checkbox')).nativeElement;
                expect(checkbox.checked).not.toBeTruthy();
            });

            it('Then it should not be disabled', () => {
                const checkbox = fixture.debugElement.query(bySpecAttribute('fluent-design-checkbox')).nativeElement;
                expect(checkbox.disabled).not.toBeTruthy();
            });
        });
        describe('When it was clicked with a previous state being: checked', () => {
            beforeEach(() => {
                component.checked = true;
                fixture.detectChanges();
            });

            it('Then it should be unchecked', () => {
                const checkbox = fixture.debugElement.query(bySpecAttribute('fluent-design-checkbox')).nativeElement;
                checkbox.click();

                expect(checkbox.checked).not.toBeTruthy();
            });

        });
        describe('When it was clicked with a previous state being: unchecked', () => {
            beforeEach(() => {
                component.checked = false;
                fixture.detectChanges();
            });
            it('Then it should be checked', () => {
                const checkbox = fixture.debugElement.query(bySpecAttribute('fluent-design-checkbox')).nativeElement;
                checkbox.click();

                expect(checkbox.checked).toBeTruthy();
            });
        });
        describe('When it is disabled', () => {
            beforeEach(() => {
                component.disabled = true;
                component.checked = true;
                fixture.detectChanges();
            });
            it('Then clicking it should not update the "checked" property', () => {
                const checkbox = fixture.debugElement.query(bySpecAttribute('fluent-design-checkbox')).nativeElement;
                checkbox.click();

                expect(checkbox.checked).toBeTruthy();
            });
        });
    });
});
