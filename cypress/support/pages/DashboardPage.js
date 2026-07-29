const BasePage = require("./BasePage");

class DashboardPage extends BasePage {
  assertLoaded() {
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
    return this;
  }

  assertWidgetsVisible() {
    ["Time at Work", "My Actions", "Quick Launch"].forEach((title) => {
      cy.contains(".oxd-text--h6", title).should("be.visible");
    });
    return this;
  }

  logout() {
    cy.get(".oxd-userdropdown-tab").click();
    cy.contains(".oxd-dropdown-menu a", "Logout").click();
    return this;
  }
}

module.exports = DashboardPage;
