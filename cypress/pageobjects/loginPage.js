class loginPage

{

    getUsernameField()
    {
       return cy.get(`input[name='username']`)
    }

    getPasswordField()
    {
       return cy.get(`input[name='password']`)
    }

    getLoginBtn()
    {
       return cy.get(`input[value='Log In']`)
    }

}



export default loginPage;