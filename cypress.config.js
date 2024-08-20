

const environment = process.env.CYPRESS_ENV || 'development';

const config = {
  development: {
    apiUrl: 'https://petstore.swagger.io/v2',
    uiUrl: 'https://parabank.parasoft.com/parabank/index.htm'
  },
  staging: {
    apiUrl: 'https://staging.example.com/api',
    uiUrl: 'https://parabank.parasoft.com/parabank/index.htm'
  },
  production: {
    apiUrl: 'https://example.com/api',
    uiUrl: 'https://parabank.parasoft.com/parabank/index.htm'
  }
};

module.exports = ({
  env: config[environment],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: 'cypress/e2e/*.*/*.js' 
  },
});
