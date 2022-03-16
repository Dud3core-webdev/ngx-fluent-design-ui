import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignTabComponent } from './ngx-fluent-design-tab.component';
import { CommonModule } from '@angular/common';
import { bySpecAttribute } from '../../../testing/test-helper';
import { DebugElement } from '@angular/core';
import SpyInstance = jest.SpyInstance;

describe('NgxFluentDesignTabComponent', () => {
    let fixture: ComponentFixture<NgxFluentDesignTabComponent>;
    let component: NgxFluentDesignTabComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule],
            declarations: [NgxFluentDesignTabComponent]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent<NgxFluentDesignTabComponent>(NgxFluentDesignTabComponent);
                component = fixture.componentInstance;
            });
    });

    describe('Given a clean state for the tab component', () => {

        let mainElement: DebugElement;
        let commandNameElement: DebugElement;

        describe('When isChecked is passed as false', () => {
            beforeEach(() => {
                component.commandName = 'General Kenobi';
                component.isChecked = false;

                fixture.detectChanges();

                mainElement = fixture.debugElement.query(bySpecAttribute('fluent-design-tab'));
                commandNameElement = fixture.debugElement.query(bySpecAttribute('command-name'));
            });

            it('Then the active class does not appear', () => {
                expect(mainElement.nativeElement.classList.contains('active')).toBe(false);
            });

            it('Then the command name is present', () => {
                expect(commandNameElement.nativeElement.innerHTML).toBe('General Kenobi');
            });

            describe('When clicking the element', () => {

                let clickSpy: SpyInstance;

                beforeEach(() => {
                     clickSpy = jest.spyOn(component.onChecked, 'emit').mockReturnThis();
                     mainElement.nativeElement.click();
                });

                it('Then an event is emitted', () => {
                    expect(component.onChecked.emit).toHaveBeenCalledWith();
                });
            });
        });

        describe('When isChecked is passed as true', () => {
            beforeEach(() => {
                component.commandName = 'General Kenobi';
                component.isChecked = true;

                fixture.detectChanges();

                mainElement = fixture.debugElement.query(bySpecAttribute('fluent-design-tab'));
                commandNameElement = fixture.debugElement.query(bySpecAttribute('command-name'));
            });

            it('Then the active class does appear', () => {
                expect(mainElement.nativeElement.classList.contains('active')).toBe(true);
            });

            describe('When clicking the element', () => {

                let clickSpy: SpyInstance;

                beforeEach(() => {
                    clickSpy = jest.spyOn(component.onChecked, 'emit').mockReturnThis();
                    mainElement.nativeElement.click();
                });

                it('Then an event is emitted', () => {
                    expect(component.onChecked.emit).toHaveBeenCalledWith();
                });
            });
        });
    });
});
