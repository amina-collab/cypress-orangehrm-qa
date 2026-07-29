const LoginPage = require("../../support/pages/LoginPage");
const DashboardPage = require("../../support/pages/DashboardPage");

describe("Login", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("logs in successfully with valid credentials", () => {
    loginPage.login(Cypress.env("adminUsername"), Cypress.env("adminPassword"));
    new DashboardPage().assertLoaded();
  });

  it("shows an error with invalid credentials", () => {
    cy.fixture("users").then(({ invalid }) => {
      loginPage.login(invalid.username, invalid.password);
    });
    loginPage.assertLoginError();
  });
});
