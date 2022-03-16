import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignTabComponent } from './ngx-fluent-design-tab.component';
import { CommonModule } from '@angular/common';
import { bySpecAttribute } from '../../../testing/test-helper';

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

        describe('When isChecked is passed as false', () => {
            beforeEach(() => {
                component.commandName = 'General Kenobi';
                component.isChecked = false;

                fixture.detectChanges();
            });

            it('Then the active class does not appear', () => {
                const parentElement = fixture.debugElement.query(bySpecAttribute('fluent-design-tab'));
                expect(parentElement.nativeElement.classList.contains('active')).toBe(false);
            });

            it('Then the command name is present', () => {
                const commandNameElement = fixture.debugElement.query(bySpecAttribute('command-name'));
                expect(commandNameElement.nativeElement.innerHTML).toBe('General Kenobi');
            });
        });
    });
});
