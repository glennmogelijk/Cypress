 describe('Quickscan', () => {
  it('Do a quickscan', () => {


    cy.login('mirra@mirra.nl','Bbxa3859?')
    
    cy.get('[data-test-id="close-welcometext-modal-button"]').click()
    cy.get('[data-test-id="quickscan-button"]').click()

const quickscanFind = (selector) => cy.get('#quickscanWidget').shadow().find(selector)
const quickscanShadow = (selector) => cy.get('#quickscanWidget').shadow()
        
// assertion step 1

quickscanShadow()
        .contains('h3', 'Te financieren object').should('be.visible');

quickscanFind('[data-test-id="quickscan-location-autocomplete-input"]')
        .type('Zandplaat 1, 3891ZB, Zeewolde')
        .type('{downarrow}')                   
        .type('{enter}')
quickscanFind('[data-test-id="quickscan-addres-type-COMMERCIAL_BUILDING_MIXED"]')
        .click()  
quickscanFind('[data-test-id="quickscan-marketvalue-input"]')
        .type('1000000')
quickscanFind('[data-test-id="quickscan-loan-input"]')
        .type('500000')
quickscanFind('[data-test-id="quickscan-next-step"]')
        .click()

// assertion step 2
quickscanShadow()
        .contains('h3', 'Mijn Gegevens').should('be.visible');

quickscanFind('[data-test-id="situation-checkbox-MOGELIJK"')
        .click()
    
 })
})
