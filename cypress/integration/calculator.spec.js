describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of the running total when number buttons are pressed', () => {
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#running-total').should('contain', '34');
  })

  it('should update the display with a result when arithmetical operations are selected', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '6');
  })
})