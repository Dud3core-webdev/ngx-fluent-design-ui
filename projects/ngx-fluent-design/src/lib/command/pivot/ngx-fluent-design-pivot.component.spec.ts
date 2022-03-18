import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignPivotComponent } from './ngx-fluent-design-pivot.component';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { bySpecAttribute } from '../../../testing/test-helper';
import SpyInstance = jest.SpyInstance;

describe('NgxFluentDesignPivotComponent', () => {
    let fixture: ComponentFixture<NgxFluentDesignPivotComponent>;
    let component: NgxFluentDesignPivotComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [NgxFluentDesignPivotComponent]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent<NgxFluentDesignPivotComponent>(NgxFluentDesignPivotComponent);
                component = fixture.componentInstance;
            });
    });

    describe('Given a clean state for the pivot component', () => {
        let mainElement: DebugElement;
        let commandNameElement: DebugElement;

        describe('When isChecked is passed as false', () => {
            beforeEach(() => {
                component.commandName = 'Hello there';
                component.isChecked = false;

                fixture.detectChanges();

                mainElement = fixture.debugElement.query(bySpecAttribute('fluent-design-pivot'));
                commandNameElement = fixture.debugElement.query(bySpecAttribute('command-name'));
            });

            it('Then the active class does not appear', () => {
                expect(mainElement.nativeElement.classList.contains('active')).toBe(false);
            });

            it('Then the command name is present', () => {
                expect(commandNameElement.nativeElement.innerHTML).toBe('Hello there');
            });

            describe('When clicking the element', () => {

                let clickSpy: SpyInstance;

                beforeEach(() => {
                    clickSpy = jest.spyOn(component.checked, 'emit').mockReturnThis();
                    mainElement.nativeElement.click();
                });

                it('Then an event is emitted', () => {
                    expect(component.checked.emit).toHaveBeenCalledWith();
                });
            });
        });

        describe('When isChecked is passed as true', () => {
            beforeEach(() => {
                component.commandName = 'General Kenobi';
                component.isChecked = true;

                fixture.detectChanges();

                mainElement = fixture.debugElement.query(bySpecAttribute('fluent-design-pivot'));
                commandNameElement = fixture.debugElement.query(bySpecAttribute('command-name'));
            });

            it('Then the active class does appear', () => {
                expect(mainElement.nativeElement.classList.contains('active')).toBe(true);
            });

            describe('When clicking the element', () => {

                let clickSpy: SpyInstance;

                beforeEach(() => {
                    clickSpy = jest.spyOn(component.checked, 'emit').mockReturnThis();
                    mainElement.nativeElement.click();
                });

                it('Then an event is emitted', () => {
                    expect(component.checked.emit).toHaveBeenCalledWith();
                });
            });
        });
    });
});
