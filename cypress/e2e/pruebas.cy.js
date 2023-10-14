/// <reference types="Cypress" />

const WEB_URL = "127.0.0.1:8080/tareas-matutuam/clase-5/tarea-1/tarea-1.html";

describe('Pruebas para la página de cálculo de salario', () => {
  it('Debería ingresar un salario anual y obtener un cálculo mensual', () => {
    cy.visit(WEB_URL); 
    cy.get('#salario-anual').type('60000');
    cy.get('#boton-calcular').click();
    cy.get('#salario-mensual')
      .should('be.disabled')
      .should('have.value', '5000');
  });
});
