describe('login Page',()=>{
  it('should signup successfully',()=>{
    cy.visit('http://localhost:3000/signup')
    cy.get('input[id="firstName"]').type('Amina')
    cy.get('input[id="lastName"]').type('Abaly')
    cy.get('input[id="username"]').type(Cypress.env('username'))
    cy.get('input[id="password"]').type(Cypress.env('password'))
    cy.get('input[id="confirmPassword"]').type(Cypress.env('password'))
    cy.get('button[type="submit"]').should('be.enabled').click()
    //cy.contains('Amina').should('be.visible')
  
  })
})