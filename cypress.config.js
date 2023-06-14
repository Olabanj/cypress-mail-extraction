const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.trymima.com/',
    watchForFileChanges: false,
    requestTimeout:30000,
    defaultCommandTimeout:30000,
    responseTimeout:300000,
    testIsolation:false,
    viewportHeight:800,
    viewportWidth:1400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
