/// <reference types="Cypress" />
import LoginPage from "../../pageobjects/loginPage";


describe('Para Bank Automation ', () => 

  {
    let data ;
    before(function(){  
      cy.fixture('example').then(function(fdata)
      {
          data = fdata

      })
    })
    it('Entering data into form', () => {

      const loginPage = new LoginPage;
      cy.visit(Cypress.env('uiUrl')).as('para bank website')
      loginPage.getUsernameField().clear();
      loginPage.getUsernameField().type(data.username);
      loginPage.getPasswordField().type(data.password);
      loginPage.getLoginBtn().click();
      cy.wait(2000);
      cy.screenshot();

   
  })
})