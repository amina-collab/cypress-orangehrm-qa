const LoginPage = require("./pages/LoginPage");
const DashboardPage = require("./pages/DashboardPage");

Cypress.Commands.add("login", (username, password) => {
  const loginPage = new LoginPage();
  loginPage.visit().login(
    username || Cypress.env("adminUsername"),
    password || Cypress.env("adminPassword")
  );
  new DashboardPage().assertLoaded();
});
