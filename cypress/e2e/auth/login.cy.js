describe('login page',()=>{
    it('should login successfully',()=>{
        cy.login(Cypress.env('username'), Cypress.env('password'))
        //cy.get('button[data-test="user-onboarding-next"]').click()
        //cy.get('input[id="bankaccount-bankName-input"]').type('My Bank Name')
        //cy.get('input[id="bankaccount-routingNumber-input"]').type('123456789')
        //cy.get('input[id="bankaccount-accountNumber-input"]').type('987654321')
        //cy.get('button[data-test="bankaccount-submit"]').should('be.enabled').click()  
        cy.contains('Amina A').should('be.visible') 
    
    })
})


   

