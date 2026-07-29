const DashboardPage = require("../../support/pages/DashboardPage");

describe("Dashboard", () => {
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    cy.login();
  });

  it("loads with the core widgets visible", () => {
    dashboardPage.assertLoaded().assertWidgetsVisible();
  });
});
