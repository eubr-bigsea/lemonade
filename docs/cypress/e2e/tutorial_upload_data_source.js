describe("Recording 11/05/2023 at 18:25:19", () => {
  it("tests Recording 11/05/2023 at 18:25:19", () => {
    cy.viewport(1234, 937);
    cy.visit("http://localhost:8081/data-sources");
    cy.get("#add-data-source").click();
    cy.get("[name=storage-fsStorage]").click();
    cy.get("[name=btn-fsStorage]").click();
    cy.get("#select-from-computer > u").click();
  });
});
