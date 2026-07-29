const BasePage = require("./BasePage");

class LeavePage extends BasePage {
  goToApply() {
    return super.visit("/web/index.php/leave/applyLeave");
  }

  goToList() {
    return super.visit("/web/index.php/leave/viewMyLeaveList");
  }

  applyLeave({ leaveType, fromDate, toDate }) {
    cy.get(".oxd-select-text").first().click();
    cy.contains(".oxd-select-option", leaveType).click();
    cy.get('input[placeholder="yyyy-dd-mm"]').first().type(fromDate);
    cy.get('input[placeholder="yyyy-dd-mm"]').last().type(toDate);
    cy.contains("button", "Apply").click();
    return this;
  }

  assertLeaveListContains(leaveType) {
    this.goToList();
    cy.get(".oxd-table-body").should("contain.text", leaveType);
    return this;
  }
}

module.exports = LeavePage;
