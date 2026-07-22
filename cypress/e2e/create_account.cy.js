describe('creation page',()=>{
    it('should create a new bank account',()=>{
        cy.login('aminaabaly', 'azerty5953')
        cy.visit('/bankaccounts')
        cy.contains('Create').should('be.visible')
        cy.get('a[data-test="bankaccount-new"]').click()
        cy.get('input[id="bankaccount-bankName-input"]').type('My Bank Name')
        cy.get('input[id="bankaccount-routingNumber-input"]').type('123456789')
        cy.get('input[id="bankaccount-accountNumber-input"]').type('987654321')
        cy.get('button[data-test="bankaccount-submit"]').should('be.enabled').click()

    })
})