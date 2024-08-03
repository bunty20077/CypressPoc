/// <reference types="Cypress" />

describe('Poke UI Automation ', () => {
  it('Entering data into form', () => {
    cy.visit(Cypress.env('uiUrl')).as('pokemon')
    cy.get('#url-input').clear();
    cy.get('#url-input').type('pokemon/pikachu');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
   // cy.get('.ApiExplorer-module__message--e4oy9').contains('Resource for pikachu');
    cy.get('.ApiExplorer-module__message--e4oy9').should('have.text','Resource for pikachu');

   
  })
})