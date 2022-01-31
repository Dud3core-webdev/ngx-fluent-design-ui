import { Selector } from '../../support/selector';

const views = ['desktop', 'mobile'];

views.forEach((view) => {
    describe(`Mess Page in ${view} view`, () => {
        it('It loads', () => {
            cy.visit(`/${view}`);
        });

        describe('Given the form section loads', () => {
            describe('When the Checkbox section loads', () => {
                it('Then the checkbox labeled as "disabled" should be disabled', () => {
                    cy.get(Selector.attrE2E('@ngx-fluent-design-checkbox/form-section-disabled')).should('be.disabled');
                });
            });
            describe('When the Radio section loads', () => {
                it('Then the radio button labeled as "disabled" should be disabled', () => {
                    cy.get(Selector.attrE2E('@ngx-fluent-design-radio/form-section-disabled')).should('be.disabled');
                });
            });
        });
    });
});
