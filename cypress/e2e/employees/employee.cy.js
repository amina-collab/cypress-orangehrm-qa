const EmployeePage = require("../../support/pages/EmployeePage");

describe("PIM - Employees", () => {
  const employeePage = new EmployeePage();
  let firstName;
  let lastName;

  beforeEach(() => {
    cy.login();
    cy.fixture("employees").then(({ samples }) => {
      const suffix = Date.now();
      firstName = samples[0].firstName;
      lastName = `${samples[0].lastName}${suffix}`;
    });
  });

  it("adds, searches and deletes an employee", () => {
    employeePage.goTo();
    cy.then(() => employeePage.addEmployee({ firstName, lastName }));
    cy.then(() =>
      employeePage
        .searchByName(`${firstName} ${lastName}`)
        .assertResultContains(lastName)
        .deleteSearchResult()
    );
  });
});
