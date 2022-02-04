import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFluentDesignPanelComponent } from './ngx-fluent-design-panel.component';

describe('PanelComponent', () => {
    let component: NgxFluentDesignPanelComponent;
    let fixture: ComponentFixture<NgxFluentDesignPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignPanelComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
