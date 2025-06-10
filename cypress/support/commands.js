// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
  // Option A: UI Login
  cy.visit('https://advisor-test.mogelijk.nl/login')
  cy.get('[data-test-id="email"]').type(username || Cypress.env('username'))
  cy.get('[data-test-id="password"]').type(password || Cypress.env('password'))
  cy.get('[data-test-id="dynamic-form-button"]').click()

  })

Cypress.Commands.add('MMlogin', (username, password) => {
  // Option A: UI Login
  cy.visit('https://mijn-test.mogelijk.nl')
  cy.get('[data-test-id="myaccount-login-button"]').eq(0).click({ force: true })
  cy.get('[data-test-id="email"]').type(username || Cypress.env('username'))
  cy.get('[data-test-id="password"]').type(password || Cypress.env('password'))
  cy.get('[data-test-id="dynamic-form-button"]').click()
  
 
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})