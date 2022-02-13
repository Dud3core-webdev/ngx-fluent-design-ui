import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFluentDesignPanelComponent } from './ngx-fluent-design-panel.component';
import { NgxFluentDesignIconModule } from '../../icons/ngx-fluent-design-icon.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFluentDesignSheetComponent } from '../sheet/ngx-fluent-design-sheet.component';
import { NgxFluentDesignPanelHandler } from './panel-handler.helper';

describe('PanelComponent', () => {
    let component: NgxFluentDesignPanelComponent;
    let fixture: ComponentFixture<NgxFluentDesignPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                NgxFluentDesignPanelComponent,
                NgxFluentDesignSheetComponent
            ],
            imports: [
                NgxFluentDesignIconModule,
                NoopAnimationsModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignPanelComponent);
        component = fixture.componentInstance;
        component.handler = new NgxFluentDesignPanelHandler(false);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
