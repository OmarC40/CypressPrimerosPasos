describe('Conjunto de pruebas', () => {
    /*beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com')
        
    })*/

    it("Validar Pagina de inicio",()=>{
        cy.visit('http://zero.webappsecurity.com')
        cy.get('.active > img').should("be.visible")
        cy.get('.active > .custom > h4').should("be.visible")
        cy.get('.active > .custom > h4').contains("Online Banking")
        cy.get('.active > .custom > h4').should('have.text',"Online Banking");

    })

    describe('Hooks', () => {
        beforeEach(() => {
            cy.visit('http://zero.webappsecurity.com')
            cy.get('#signin_button').click()
            cy.get('#user_login').type("username")
            cy.get('#user_password').type("password{enter}")
            
        })
        it("Prueba E2E",()=>{
            cy.get('#transfer_funds_tab > a').click()
            cy.get('#tf_fromAccountId').select("1")
            cy.get('#tf_toAccountId').select("4")
            cy.get('#tf_amount').type("500")
            cy.get('#tf_description').type("hola")
            cy.get('#btn_submit').click()
            cy.get('#btn_submit').click()
            cy.get('.alert').contains('You successfully submitted your transaction.')
            
            
        })
    
        it("Grafico Pastel",()=>{
            cy.get('#money_map_tab > a').click()
            cy.get('#ext-sprite-1269').should("be.visible")
            cy.get('#ext-sprite-1187 > tspan').click()
            cy.get('#ext-sprite-1369 > tspan').click()
    
            
        })
        

    })

    /*it("Prueba E2E",()=>{
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password{enter}")
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1")
        cy.get('#tf_toAccountId').select("4")
        cy.get('#tf_amount').type("500")
        cy.get('#tf_description').type("hola")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains('You successfully submitted your transaction.')
        
        
    })

    it.only("Grafico Pastel",()=>{
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password{enter}")
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1269').should("be.visible")
        cy.get('#ext-sprite-1187 > tspan').click()
        cy.get('#ext-sprite-1369 > tspan').click()

        
    })*/

})
   



































































































































