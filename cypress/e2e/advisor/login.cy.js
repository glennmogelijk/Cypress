// Advisor Login Test
describe('Advisor Login', () => {
  it('should login successfully', () => {
    // Direct URL, no config needed
    cy.visit('https://advisor-test.mogelijk.nl')
    
    // Using data-test-id selectors from the DOM
    cy.get('[data-test-id="email"]')
      .type('mirra@mirra.nl')
    
    cy.get('[data-test-id="password"]')
      .type('Bbxa3859?')
    
    cy.get('[data-test-id="dynamic-form-button"]')
      .click()
    
    // Verify we're on the dashboard
    cy.title().should('eq', 'Mijn aanvragen | Mogelijk Vastgoedfinancieringen')
  })

  it('should show error with invalid credentials', () => {
    cy.visit('https://advisor-test.mogelijk.nl')
    
    cy.get('[data-test-id="email"]')
      .type('invalid@user.com')
    
    cy.get('[data-test-id="password"]')
      .type('wrongpassword')
    
    cy.get('[data-test-id="dynamic-form-button"]')
      .click()
    
    // Look for the exact error message text
    cy.contains('Ongeldige e-mailadres en wachtwoord combinatie.')
      .should('be.visible')
  })
}) 