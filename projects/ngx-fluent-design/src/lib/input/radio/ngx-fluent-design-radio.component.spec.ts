import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignRadioComponent } from './ngx-fluent-design-radio.component';

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

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
