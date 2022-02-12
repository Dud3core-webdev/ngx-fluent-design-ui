import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignButtonComponent } from './ngx-fluent-design-button.component';
import { bySpecAttribute } from '../../../testing/test-helper';
import SpyInstance = jest.SpyInstance;

describe('NgxFluentDesignButtonComponent', () => {
    let component: NgxFluentDesignButtonComponent;
    let fixture: ComponentFixture<NgxFluentDesignButtonComponent>;

    let clickedSpy: SpyInstance;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignButtonComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignButtonComponent);
        component = fixture.componentInstance;
        clickedSpy = jest.spyOn(component.clicked, 'emit');
        fixture.detectChanges();
    });

    describe('Given the button component initialises', () => {
        describe('When the user clicks on the button', () => {
            beforeEach(() => {
                const button = fixture.debugElement.query(bySpecAttribute('fluent-design-standard-button')).nativeElement;
                button.click();
            });

            it('Then the clicked event is emitted', () => {
                expect(clickedSpy).toHaveBeenCalled();
            });
        });
    });
});
