import { ComponentFixture, TestBed } from '@angular/core/testing';
import { bySpecAttribute } from '../../../../testing/test-helper';
import { NgxFluentDesignCompoundButtonComponent } from './ngx-fluent-design-compound-button.component';
import SpyInstance = jest.SpyInstance;

describe('NgxFluentDesignCompoundButtonComponent', () => {
    let component: NgxFluentDesignCompoundButtonComponent;
    let fixture: ComponentFixture<NgxFluentDesignCompoundButtonComponent>;

    let clickedSpy: SpyInstance;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignCompoundButtonComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignCompoundButtonComponent);
        component = fixture.componentInstance;
        clickedSpy = jest.spyOn(component.clicked, 'emit');
        fixture.detectChanges();
    });

    describe('Given the compound-button component initialises', () => {
        describe('When the user clicks on the button', () => {
            beforeEach(() => {
                const compoundButton = fixture.debugElement.query(bySpecAttribute('fluent-design-compound-button')).nativeElement;
                compoundButton.click();
            });

            it('Then the clicked event is emitted', () => {
                expect(clickedSpy).toHaveBeenCalled();
            });
        });
    });
});
