const BasePage = require("./BasePage");

class EmployeePage extends BasePage {
  goTo() {
    return super.visit("/web/index.php/pim/viewEmployeeList");
  }

  addEmployee({ firstName, lastName }) {
    cy.contains("button", "Add").click();
    this.waitForPageLoad();
    cy.get('input[name="firstName"]').type(firstName);
    cy.get('input[name="lastName"]').type(lastName);
    cy.contains("button", "Save").click();
    this.waitForPageLoad();
    return this;
  }

  searchByName(firstAndLastName) {
    this.goTo();
    cy.get(".oxd-table-filter-area input[placeholder='Type for hints...']")
      .first()
      .type(firstAndLastName);
    cy.contains(".oxd-autocomplete-dropdown span", firstAndLastName, {
      timeout: 10000,
    }).click();
    cy.contains("button", "Search").click();
    this.waitForPageLoad();
    return this;
  }

  assertResultContains(name) {
    cy.get(".oxd-table-body").should("contain.text", name);
    return this;
  }

  deleteSearchResult() {
    cy.get(".oxd-table-body .oxd-table-row")
      .first()
      .find('.oxd-icon.bi-trash')
      .click();
    cy.contains("button", "Yes, Delete").click();
    return this;
  }
}

module.exports = EmployeePage;
