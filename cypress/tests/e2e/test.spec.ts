import { Selector } from '../../support/selector';

describe('Mess Page', () => {
    it('It loads', () => {
        cy.visit('/desktop');
    });

    describe('Given the form section initially loads', () => {
        it('Then the enabled checkbox should not be checked', () => {

        });

        it('Then the disabled checkbox should be disabled', () => {
            cy.get(Selector.attrE2E('@checkbox-disabled')).should('be.disabled');
        });
    });
});
