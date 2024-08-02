

const environment = process.env.CYPRESS_ENV || 'development';

const config = {
  development: {
    baseUrl: 'https://pokeapi.co/api/v2/pokemon',
    apiUrl: 'https://pokeapi.co/api/v2/pokemon'
  },
  staging: {
    baseUrl: 'https://staging.example.com',
    apiUrl: 'https://staging.example.com/api'
  },
  production: {
    baseUrl: 'https://example.com',
    apiUrl: 'https://example.com/api'
  }
};

module.exports = ({
  env: config[environment],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
