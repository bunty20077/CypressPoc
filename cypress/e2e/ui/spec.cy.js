/// <reference types="Cypress" />
import LoginPage from "../../pageobjects/loginPage";


describe('Poke UI Automation ', () => {
  it('Entering data into form', () => {

    const loginPage = new LoginPage;
    cy.visit(Cypress.env('uiUrl')).as('pokemon')
    loginPage.getUsernameField().clear();
    loginPage.getUsernameField().type('supereasy');
    loginPage.getPasswordField().type('supereasy');
    loginPage.getLoginBtn().click();
    cy.wait(2000);
    cy.screenshot();

   
  })
})