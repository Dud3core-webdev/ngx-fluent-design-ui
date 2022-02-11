import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFluentDesignPanelComponent } from './ngx-fluent-design-panel.component';
import { NgxFluentDesignIconModule } from '../../icons/ngx-fluent-design-icon.module';
import { NgxFluentDesignCommonComponentsModule } from '../../common/components/ngx-fluent-design-common-components.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PanelComponent', () => {
    let component: NgxFluentDesignPanelComponent;
    let fixture: ComponentFixture<NgxFluentDesignPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignPanelComponent],
            imports: [
                NgxFluentDesignIconModule,
                NgxFluentDesignCommonComponentsModule,
                NoopAnimationsModule
            ]
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
