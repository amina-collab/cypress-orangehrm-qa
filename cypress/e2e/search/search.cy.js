// OrangeHRM's open-source demo has no global search bar; the closest real,
// stable "search" feature is the employee list search within PIM.
const EmployeePage = require("../../support/pages/EmployeePage");

describe("Employee search (PIM)", () => {
  const employeePage = new EmployeePage();

  beforeEach(() => {
    cy.login();
  });

  it("finds an existing employee by name", () => {
    employeePage.goTo();
    cy.get(".oxd-table-body .oxd-table-row")
      .first()
      .find(".oxd-table-cell")
      .eq(2)
      .invoke("text")
      .then((fullName) => {
        employeePage.searchByName(fullName.trim());
        employeePage.assertResultContains(fullName.trim());
      });
  });
});
