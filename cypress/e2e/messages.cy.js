describe('Messages', () => {
  it('can be navigated to from the homepage', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
    cy.get('div').contains('Messages').click()
    cy.url().should('include', '/messages')
  })

  it('can submit a valid message', () => {
    cy.visit('http://localhost:8000/messages')
    cy.get('input').type('test message')
    cy.get('button[type=submit').click()
    cy.get('ul li:first').should('be.visible')
    cy.get('ul li:first').contains('test message')
  })
})