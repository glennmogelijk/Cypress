describe('Fondsflow', () => {
  it('fondsregistratie aanmaken en weer verwijderen', () => {
    cy.MMlogin('mirra@mirra.nl', 'Bbxa3859?')

    cy.title().should('eq', 'Actueel aanbod | Mogelijk Vastgoedfinancieringen')

    cy.get('[data-test-id="sidebar-link-3"]').click()

    cy.title().should('eq', 'Het Mogelijk Fonds | Mogelijk Vastgoedfinancieringen')

    cy.get('[data-test-id="fund-15-start-button"]').click()
    cy.get('[data-test-id="add-private-fund-registration"]').click()
    cy.get('[data-test-id="fund_total_investment"]').type('250000')
    cy.get('[data-test-id="iban_name"]').type('henk')
    cy.get('[data-test-id="iban"]').type('NL94RABO0113383215')
    cy.get('[data-test-id="fund-registration-submit"]').click()
    cy.get('[data-test-id="remove-private-fund-registration-0"]').click()
    cy.get('[data-test-id="confirm-button"]').click()
  })
})
