import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignProgressIndicatorIndeterminateComponent } from './ngx-fluent-design-progress-indicator-indeterminate.component';
import { bySpecAttribute } from '../../../testing/test-helper';

describe('NgxFluentDesignProgressIndicatorIndeterminateComponent', () => {
    let component: NgxFluentDesignProgressIndicatorIndeterminateComponent;
    let fixture: ComponentFixture<NgxFluentDesignProgressIndicatorIndeterminateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignProgressIndicatorIndeterminateComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignProgressIndicatorIndeterminateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Given the indeterminate progress indicator component initialises', () => {
        describe('When the user passes in a custom label', () => {
            it('Then the label appears correctly', () => {
                component.label = 'Test Label';
                fixture.detectChanges();
                const progressIndicatorLabel =
                    fixture.debugElement.query(bySpecAttribute('fluent-design-progress-indicator-indeterminate-label')).nativeElement;
                expect(progressIndicatorLabel.innerHTML).toEqual('Test Label');
            });
        });

        describe('When the user does not specify a custom label', () => {
            it('Then the label does not appear', () => {
                const progressIndicatorLabel =
                    fixture.debugElement.query(bySpecAttribute('fluent-design-progress-indicator-indeterminate-label'));
                expect(progressIndicatorLabel).toBeNull();
            });
        });


        describe('When the user passes in a custom description', () => {
            it('Then the description appears correctly', () => {
                component.description = 'Test Description';
                fixture.detectChanges();
                const progressIndicatorDescription =
                    fixture.debugElement.query(bySpecAttribute('fluent-design-progress-indicator-indeterminate-description')).nativeElement;
                expect(progressIndicatorDescription.innerHTML).toEqual('Test Description');
            });
        });

        describe('When the user does not specify a custom description', () => {
            it('Then the description does not appear', () => {
                const progressIndicatorDescription =
                    fixture.debugElement.query(bySpecAttribute('fluent-design-progress-indicator-indeterminate-description'));
                expect(progressIndicatorDescription).toBeNull();
            });
        });
    });
});
