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

        describe('Given the Progress section loads', () => {
            describe('When the Spinner section loads', () => {
                it('Then the spinners of all sizes should display along with their labels', () => {
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner/xs-with-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner-label/xs-with-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner/s-with-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner-label/s-with-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner/m-with-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner-label/m-with-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner/l-with-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner-label/l-with-label')).should('be.visible');
                });
                it('Then the spinners of all sizes should display without their labels', () => {
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner/xs-no-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner-label/xs-no-label')).should('not.exist');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner/s-no-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner-label/s-no-label')).should('not.exist');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner/m-no-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner-label/m-no-label')).should('not.exist');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner/l-no-label')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-spinner-label/l-no-label')).should('not.exist');
                });
            });
            describe('When the Progress Indicator section loads', () => {
                it('Then the Progress Indicator should display with a label and description', () => {
                    cy.get(Selector.attrE2E('@ngx-fluent-design-progress-indicator-label/label-and-description')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-progress-indicator/label-and-description')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-progress-indicator-description/label-and-description')).should('be.visible');
                });
                it('Then the Indeterminate Progress Indicator should display with a label and description', () => {
                    cy.get(Selector.attrE2E('@ngx-fluent-design-progress-indicator-indeterminate-label/label-and-description')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-progress-indicator-indeterminate/label-and-description')).should('be.visible');
                    cy.get(Selector.attrE2E('@ngx-fluent-design-progress-indicator-indeterminate-description/label-and-description')).should('be.visible');
                });
            });
        });
    });
});

