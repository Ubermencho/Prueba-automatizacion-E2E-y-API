const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      "baseUrl" : "https://petstore.swagger.io/v2",
      "username": "Oflores",
      "updatedUsername": "UPDATED NAME"
    }
  },
});
