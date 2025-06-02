const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advisor-test.mogelijk.nl', // Replace with your actual base URL
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Browser configuration
    browsers: [
      {
        name: 'chrome',
        family: 'chromium',
        channel: 'stable',
        displayName: 'Chrome',
        version: 'latest',
        path: '',  // Cypress will auto-detect the path
      }
    ],
    chromeWebSecurity: false, // This might be needed depending on your application
    experimentalModifyObstructiveThirdPartyCode: true,
    // Cache configuration
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    video: false,
    screenshotOnRunFailure: true
  },
  env: {
    // Environment variables from your Config.properties
    environment: 'test',
    advisorLoginUrl: '/advisor/login',
    quickscanUrl: '/advisor/quickscan'
  },
  retries: {
    runMode: 2,
    openMode: 0
  }
});
