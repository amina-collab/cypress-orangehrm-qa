const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  env: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
