class BasePage {
  visit(path = "/") {
    cy.visit(path);
    return this;
  }

  waitForPageLoad() {
    cy.get(".oxd-loading-spinner", { timeout: 20000 }).should("not.exist");
    return this;
  }

  clickMenuItem(name) {
    cy.get(".oxd-main-menu").contains(".oxd-main-menu-item", name).click();
    this.waitForPageLoad();
    return this;
  }
}

module.exports = BasePage;
