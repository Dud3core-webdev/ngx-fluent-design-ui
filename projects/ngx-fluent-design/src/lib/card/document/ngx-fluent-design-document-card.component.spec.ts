import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFluentDesignDocumentCardComponent } from './ngx-fluent-design-document-card.component';
import { bySpecAttribute } from '../../../testing/test-helper';
import SpyInstance = jest.SpyInstance;

describe('NgxFluentDesignDocumentCardComponent', () => {
    let component: NgxFluentDesignDocumentCardComponent;
    let fixture: ComponentFixture<NgxFluentDesignDocumentCardComponent>;

    let cardClickedEventSpy: SpyInstance;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxFluentDesignDocumentCardComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFluentDesignDocumentCardComponent);
        component = fixture.componentInstance;
        cardClickedEventSpy = jest.spyOn(component.cardClicked, 'emit');
        fixture.detectChanges();
    });

    describe('Given the document card component initialises', () => {
        describe('When the user clicks on the card', () => {
            beforeEach(() => {
                const documentCard = fixture.debugElement.query(bySpecAttribute('fluent-design-document-card')).nativeElement;
                documentCard.click();
            });

            it('Then the cardClicked event is emitted', () => {
                expect(cardClickedEventSpy).toHaveBeenCalled();
            });
        });
    });
});
