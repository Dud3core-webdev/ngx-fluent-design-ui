import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignSpinnerComponent } from './ngx-fluent-design-spinner.component';
import { bySpecAttribute } from '../../../testing/test-helper';

describe('NgxFluentDesignSpinnerComponent', () => {
    let component: NgxFluentDesignSpinnerComponent;
    let fixture: ComponentFixture<NgxFluentDesignSpinnerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignSpinnerComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Given the spinner initialises', () => {
        describe('When the requested size is: extra-small', () => {
            it('Then the extra-small class should be applied', () => {
                component.size = 'extra-small';
                fixture.detectChanges();
                const spinner = fixture.debugElement.query(bySpecAttribute('fluent-design-spinner'));
                expect(spinner.nativeElement.classList).toContain('size-xs');
            });
        });
        describe('When the requested size is: small', () => {
            it('Then the small class should be applied', () => {
                component.size = 'small';
                fixture.detectChanges();

                const spinner = fixture.debugElement.query(bySpecAttribute('fluent-design-spinner'));
                expect(spinner.nativeElement.classList).toContain('size-s');
            });
        });
        describe('When the requested size is: medium', () => {
            it('Then the medium class should be applied', () => {
                component.size = 'medium';
                fixture.detectChanges();

                const spinner = fixture.debugElement.query(bySpecAttribute('fluent-design-spinner'));
                expect(spinner.nativeElement.classList).toContain('size-m');
            });
        });
        describe('When the requested size is: large', () => {
            it('Then the large class should be applied', () => {
                component.size = 'large';
                fixture.detectChanges();

                const spinner = fixture.debugElement.query(bySpecAttribute('fluent-design-spinner'));
                expect(spinner.nativeElement.classList).toContain('size-l');
            });
        });
    });
});
