import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignSelectComponent } from './ngx-fluent-design-select.component';
import { NgxFluentDesignCtaModule } from '../../cta/ngx-fluent-design-cta.module';
import { bySpecAttribute } from '../../../testing/test-helper';

describe('NgxFluentDesignSelectComponent', () => {
    let fixture: ComponentFixture<NgxFluentDesignSelectComponent>;
    let component: NgxFluentDesignSelectComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NgxFluentDesignCtaModule],
            declarations: [NgxFluentDesignSelectComponent]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(NgxFluentDesignSelectComponent);
                component = fixture.componentInstance;

                component.label = 'Test Label';
                component.options = ['Option 1', 'option 2'];

                fixture.detectChanges();
            });
    });

    describe('Given the component is in its default state', () => {
        let fluentDesignCompoundContainer;
        let fluentDesignCompoundSelectLabel;

        beforeEach(() => {
            fluentDesignCompoundContainer = bySpecAttribute('fluent-design-compound-container');
            fluentDesignCompoundSelectLabel = bySpecAttribute('fluent-design-compound-select-label');
        });

        it('Then the current selected option is set to default', () => {
            expect(component.getCurrentSelectedOption()).not.toBeDefined();
        });

        it('Then the select container is in view', () => {
            expect(fluentDesignCompoundContainer).toBeDefined();
        });

        it('Then the options container is not in view', () => {
            expect(component.canDisplayOptions).toBe(false);
        });
    });
});
