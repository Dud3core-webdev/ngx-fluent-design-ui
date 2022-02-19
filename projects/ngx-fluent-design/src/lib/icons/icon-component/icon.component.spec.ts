import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignIconComponent } from './icon.component';
import { bySpecAttribute } from '../../../testing/test-helper';
import { NgxFluentDesignIconInfoWarn } from '../shared/constants/ngx-fluent-design-icons-list';

describe('NgxFluentDesignIconComponent', () => {
    let fixture: ComponentFixture<NgxFluentDesignIconComponent>;
    let component: NgxFluentDesignIconComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NgxFluentDesignIconComponent],
            providers: [
                {
                    provide: getComputedStyle,
                    useValue: {
                        getPropertyValue(property: string): string {
                            return '#000000'
                        }
                    }
                }
            ]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(NgxFluentDesignIconComponent);
                component = fixture.componentInstance;
            });
    });

    describe('Given a normal old fill is passed into the component', () => {
        let svgElement;
        let svgPath;
        beforeEach(() => {
            component.fillColor = '#000000';
            component.icon = NgxFluentDesignIconInfoWarn;

            fixture.detectChanges();
            svgElement = fixture.debugElement.query(bySpecAttribute('fluent-design-icon'));
            svgPath = fixture.debugElement.query(bySpecAttribute('fluent-design-icon-path'));
        });

        it('Then the viewbox is set correctly', () => {
            expect(component.iconViewBox).toBe('0 0 15 15');
        });

        it('Then the correct color is set to the svg path', () => {
            expect(svgPath.attributes.fill).toBe('#000000');
        });
    });
});
