import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignProgressIndicatorComponent } from './ngx-fluent-design-progress-indicator.component';
import { bySpecAttribute } from '../../../testing/test-helper';

describe('NgxFluentDesignProgressIndicatorComponent', () => {
    let component: NgxFluentDesignProgressIndicatorComponent;
    let fixture: ComponentFixture<NgxFluentDesignProgressIndicatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignProgressIndicatorComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignProgressIndicatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Given the progress indicator component initialises', () => {
        describe('When the user passes in a custom label', () => {
            it('Then the label appears correctly', () => {
                component.label = 'Test Label';
                fixture.detectChanges();
                const progressIndicatorLabel =
                    fixture.debugElement.query(bySpecAttribute('fluent-design-progress-indicator-label')).nativeElement;
                expect(progressIndicatorLabel.innerHTML).toEqual('Test Label');
            });
        });

        describe('When the user does not specify a custom label', () => {
            it('Then the label does not appear', () => {
                const progressIndicatorLabel =
                    fixture.debugElement.query(bySpecAttribute('fluent-design-progress-indicator-label'));
                expect(progressIndicatorLabel).toBeNull();
            });
        });


        describe('When the user passes in a custom description', () => {
            it('Then the description appears correctly', () => {
                component.description = 'Test Description';
                fixture.detectChanges();
                const progressIndicatorDescription =
                    fixture.debugElement.query(bySpecAttribute('fluent-design-progress-indicator-description')).nativeElement;
                expect(progressIndicatorDescription.innerHTML).toEqual('Test Description');
            });
        });

        describe('When the user does not specify a custom description', () => {
            it('Then the description does not appear', () => {
                const progressIndicatorDescription =
                    fixture.debugElement.query(bySpecAttribute('fluent-design-progress-indicator-description'));
                expect(progressIndicatorDescription).toBeNull();
            });
        });
    });
});
