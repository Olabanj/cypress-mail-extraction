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
const {MailSlurp} = require('mailslurp-client')
const mailslurp = new MailSlurp({ apiKey: "056efad3e51177f8b53e387b4772ed23003d6f6c7a1c2a5522d55dbcb204b594" });
Cypress.Commands.add('createInbox',()=>{
    return mailslurp.createInbox()
})
Cypress.Commands.add('waitForLatestEmail',(inboxId)=>{
    const timeoutMillis = 3000
    return mailslurp.waitForLatestEmail(inboxId, timeoutMillis)
})