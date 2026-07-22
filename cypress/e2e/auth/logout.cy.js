describe('logout successfully',()=>{
         it('should logout successfully',()=>{
        cy.login(Cypress.env('username'), Cypress.env('password'))
        cy.visit('/')
        //cy.get('button[data-test="sidenav-toggle"]').click()
        cy.get('div[data-test="sidenav-signout"]').click()
        cy.contains('Sign in').should('be.visible')
        
        
    })
    
})