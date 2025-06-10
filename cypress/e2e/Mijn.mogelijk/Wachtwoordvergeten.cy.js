describe('Wachtwoord vergeten', () => {
  it('nieuw wachtwoord aanmaken', () => {


cy.visit('https://mijn-test.mogelijk.nl')

cy.get('[data-test-id="myaccount-login-button"]').eq(0).click({ force: true })
cy.get('[data-test-id="login-forgot-password"]').click()
cy.get('[data-test-id="email"]').type('mirra@mirra.nl')
cy.get('[data-test-id="dynamic-form-button"]').click()

cy.contains('Aanvraag verstuurd')
      .should('be.visible')


  })

})