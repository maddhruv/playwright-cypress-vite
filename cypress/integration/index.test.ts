it("test whole content", () => {
  cy.visit("/");
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[href="https://vitejs.dev"] > .logo');
  cy.get('[href="https://reactjs.org"] > .logo');
  cy.get("h1").contains("Vite + React");
  cy.get("button").click();
  cy.get("code").click();
  cy.get(".read-the-docs").click();
  /* ==== End Cypress Studio ==== */
});
