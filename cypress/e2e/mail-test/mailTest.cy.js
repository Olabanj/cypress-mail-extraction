let inboxId;
let emailAddress;
let emailBody;
let otpCode;

describe('test-suite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("test login", () => {
    cy.fixture("selector").then((sel) => {
      cy.get(sel.clickBtn1).click();
      cy.get(sel.firstName).type("lukman olabanjii olaitans6");
      cy.get(sel.busName).type("checkins");
      cy.createInbox().then((inbox) => {
        inboxId = inbox.id;
        emailAddress = inbox.emailAddress;
        cy.get(sel.busEmail).type(emailAddress);
        cy.get(sel.busPhone).type('08022628777');
        cy.get(sel.proceedBtn).click({ force: true });
        cy.get(sel.enterWebsite).type("test.com");
        cy.get(sel.selDropdown).click();
        cy.get(sel.selInstagram).click();
        cy.get(sel.passwordField).type('Testing@9');
        cy.get(sel.nextButton).click({ force: true });
        cy.waitForLatestEmail({ inboxId, inboxEmailAddress: emailAddress }).then((email) => {
          emailBody = email.body;
          const parser = new DOMParser();
          const doc = parser.parseFromString(emailBody, 'text/html');
          var otp = doc.querySelector('body > center:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > p:nth-child(3) > strong:nth-child(1)').textContent;
          otpCode = otp.trim();
          cy.log(otpCode)
         // cy.get(sel.otpField).each(($el, index) => {
           // cy.wrap($el).should('exist').type(otpCode[index]);
         // });
        });
      });
    });
  });
});

