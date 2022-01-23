import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignCheckboxComponent } from './ngx-fluent-design-checkbox.component';

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

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
