import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignRadioComponent } from './ngx-fluent-design-radio.component';
import { bySpecAttribute } from '../../../testing/test-helper';

describe('NgxFluentDesignRadioComponent', () => {
    let component: NgxFluentDesignRadioComponent;
    let fixture: ComponentFixture<NgxFluentDesignRadioComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignRadioComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignRadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Given the radio button initialises', () => {
        describe('When it has not been interacted with yet', () => {
            it('Then it should not be checked', () => {
                const radio = fixture.debugElement.query(bySpecAttribute('fluent-design-radio')).nativeElement;
                expect(radio.checked).not.toBeTruthy();
            });

            it('Then it should not be disabled', () => {
                const radio = fixture.debugElement.query(bySpecAttribute('fluent-design-radio')).nativeElement;
                expect(radio.disabled).not.toBeTruthy();
            });
        });
        describe('When it was clicked with a previous state being: checked', () => {
            beforeEach(() => {
                component.checked = true;
                fixture.detectChanges();
            });

            it('Then it should be stay checked', () => {
                const radio = fixture.debugElement.query(bySpecAttribute('fluent-design-radio')).nativeElement;
                radio.click();

                expect(radio.checked).toBeTruthy();
            });

        });
        describe('When it was clicked with a previous state being: unchecked', () => {
            beforeEach(() => {
                component.checked = false;
                fixture.detectChanges();
            });
            it('Then it should be checked', () => {
                const radio = fixture.debugElement.query(bySpecAttribute('fluent-design-radio')).nativeElement;
                radio.click();

                expect(radio.checked).toBeTruthy();
            });
        });
        describe('When it is disabled', () => {
            beforeEach(() => {
                component.disabled = true;
                component.checked = false;
                fixture.detectChanges();
            });
            it('Then clicking it should not update the "checked" property', () => {
                const radio = fixture.debugElement.query(bySpecAttribute('fluent-design-radio')).nativeElement;
                radio.click();

                expect(radio.checked).not.toBeTruthy();
            });
        });
    });
});
