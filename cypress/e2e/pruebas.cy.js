/// <reference types="Cypress" />

const WEB_URL = "127.0.0.1:8080/tareas-matutuam/clase-5/tarea-1/tarea-1.html";

describe("Testea la calculadora de salarios mensuales", () => {
  beforeEach(() => {
    cy.visit(WEB_URL);
  });

  it("Chequea que el usuario haya ingresado un salario anual y calcule el salario mensual", () => {
    const salarioAnual = 500000;

    cy.get("#salario-anual").type(salarioAnual);

    cy.get("#salario-anual").should(($input) => {
      const valor = parseFloat($input.val());
      expect(valor).to.be.gte(0);
    });
  });

  afterEach(() => {
    cy.get("button").click();
  });

  it("Chequea el después de ingresar un salario anual se muestre el salario mensual", () => {
    const salarioMensual = 500000;

    {force: true}
    cy.get("#salario-mensual").type(salarioMensual, {force:true});

    cy.get("#salario-mensual").should(($input) => {
      const valor = parseFloat($input.val());
      expect(valor).to.be.gte(0);
    });
  })
});
