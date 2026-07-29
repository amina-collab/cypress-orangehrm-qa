const DashboardPage = require("../../support/pages/DashboardPage");

describe("Logout", () => {
  it("logs out and returns to the login page", () => {
    cy.login();
    new DashboardPage().logout();
    cy.url().should("include", "/auth/login");
    cy.get('input[name="username"]').should("be.visible");
  });
});
