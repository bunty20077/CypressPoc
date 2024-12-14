


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
    uiUrl: 'https://www.appsheet.com/start/8056ff1d-2886-4954-be2b-99350b8fbd31'
  }
};

module.exports = ({
  env: config[environment],
  reporter: 'mochawesome',
  video: true,
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory for reports
    charts: true, // Enable charts
    reportPageTitle: 'Cypress Awesome Report', // Title for the report page
    embeddedScreenshots: true, // Embed screenshots in the report
    overwrite: false,
    html: true,
    json: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    //specPattern: 'cypress/e2e/*.*/*.js' 
    chromeWebSecurity: false, // allow cypress to access cross-domain URLS such as NextAuth.js login provider pages
  },
});
