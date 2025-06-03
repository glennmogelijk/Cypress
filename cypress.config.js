const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advisor-test.mogelijk.nl',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 22000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    video: false,
    screenshotOnRunFailure: true
  },
  env: {
    environment: 'test',
    advisorLoginUrl: '/advisor/login',
    quickscanUrl: '/advisor/quickscan'
  },
  retries: {
    runMode: 2,
    openMode: 0
  }
});