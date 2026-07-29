const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  visit() {
    return super.visit("/web/index.php/auth/login");
  }

  login(username, password) {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    return this;
  }

  assertLoginError() {
    cy.contains(".oxd-alert-content-text", "Invalid credentials").should(
      "be.visible"
    );
    return this;
  }
}

module.exports = LoginPage;
