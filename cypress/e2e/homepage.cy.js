describe('Homepage', () => {
  it('loads correctly', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
    cy.contains('Messages')
  })
})