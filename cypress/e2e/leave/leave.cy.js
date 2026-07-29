const LeavePage = require("../../support/pages/LeavePage");

describe("Leave", () => {
  const leavePage = new LeavePage();

  beforeEach(() => {
    cy.login();
  });

  it("applies for leave and sees it in the leave list", () => {
    const today = Cypress.dayjs
      ? Cypress.dayjs().format("YYYY-DD-MM")
      : new Date().toISOString().slice(0, 10).split("-").reverse().join("-");

    leavePage.goToApply();
    leavePage.applyLeave({
      leaveType: "CAN - Bereavement",
      fromDate: today,
      toDate: today,
    });
    leavePage.assertLeaveListContains("CAN - Bereavement");
  });
});
