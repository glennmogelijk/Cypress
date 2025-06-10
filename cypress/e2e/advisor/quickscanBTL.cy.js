 describe('QuickscanBTL', () => {
  it('Do a quickscan for btl', () => {


    cy.login('mirra@mirra.nl','Bbxa3859?')
    
    cy.get('[data-test-id="close-welcometext-modal-button"]').click()
    cy.get('[data-test-id="quickscan-button"]').click()

const quickscanFind = (selector) => cy.get('#quickscanWidget').shadow().find(selector)
const quickscanShadow = (selector) => cy.get('#quickscanWidget').shadow()
        
// assertion step 1

quickscanShadow()
        .contains('h3', 'Te financieren object').should('be.visible');

quickscanFind('[data-test-id="quickscan-location-autocomplete-input"]')
        .type('Europalaan 100, 3526 KS Utrecht, Nederland')
        .type('{downarrow}')                   
        .type('{enter}')
quickscanFind('[data-test-id="quickscan-addres-type-HOME"]')
        .click()  
quickscanFind('[data-test-id="quickscan-marketvalue-input"]')
        .type('2000000')
quickscanFind('[data-test-id="quickscan-loan-input"]')
        .type('1000000')
quickscanFind('[data-test-id="quickscan-next-step"]')
        .click()

// assertion step 2
quickscanShadow()
        .contains('h3', 'Mijn Gegevens').should('be.visible');

quickscanFind('[data-test-id="situation-checkbox-MOGELIJK"')
        .click()
quickscanFind('label[for=deny-info-sharing]')
        .click()

// assertion step 3
quickscanShadow()
        .contains('label', 'Voornaam').should('be.visible');

quickscanFind('[data-test-id="first_name"]')
        .type('panda')
quickscanFind('[data-test-id="last_name"]')
        .type('vliizzard')
quickscanFind('#phone_localnumber')
        .type('0612345667')
quickscanFind('[data-test-id="email"]')
        .type('blizzard@gmail.com')
quickscanFind('[data-test-id="dynamic-form-button"]')
        .click()

// binnen de aanvraagpagina



 })
})