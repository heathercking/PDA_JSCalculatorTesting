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

  it('should be able to chain multiple operations together', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '7');
  })

  it('should be able to give the correct output for positive numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '7');
  })

  it('should be able to give the correct output for negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '-1');
  })

  it('should be able to give the correct output for decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '1.5');
  })

  it('should be able to give the correct output for very large numbers', () => {
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '237200502');
  })

  it('should return an error message to handle the exception of dividing by 0', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', 'cannot divide by 0');
  })

})
