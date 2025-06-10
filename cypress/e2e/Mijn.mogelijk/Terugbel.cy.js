describe('Terugbelverzoek', () => {
  it('Terugbelverzoek indienen', () => {
    cy.MMlogin('mirra@mirra.nl', 'Bbxa3859?')

    cy.title().should('eq', 'Actueel aanbod | Mogelijk Vastgoedfinancieringen')

    cy.get('[data-test-id="contact-button"]').click()
    cy.get('[data-test-id="dynamic-form-button"]').click()

    cy.contains('Hartelijk dank').should('be.visible')

    cy.get('[data-test-id="modal-close-button"]').click()
  })
})
