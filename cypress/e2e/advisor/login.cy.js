// Advisor Login Test
describe('Advisor Login', () => {
  it('should login successfully', () => {
    // Direct URL, no config needed
    cy.visit('https://advisor-test.mogelijk.nl')
    
    // Using data-test-id selectors from the DOM
    cy.login('mirra@mirra.nl','Bbxa3859?')
    
    // Verify we're on the dashboard
    cy.title().should('eq', 'Mijn aanvragen | Mogelijk Vastgoedfinancieringen')
  })

  it('should show error with invalid credentials', () => {
    cy.visit('https://advisor-test.mogelijk.nl')
    
    // Using data-test-id selectors from the DOM
    cy.login('mirra@mira.nl','Bbxa3859?')
    
    
    // Look for the exact error message text
    cy.contains('Ongeldige e-mailadres en wachtwoord combinatie.')
      .should('be.visible')
  })
}) 