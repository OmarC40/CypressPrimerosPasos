
describe('Purchase Process', () => {
        it('should allow the user to add a product to the cart and complete the purchase', () => {
         
            cy.visit('/')
    
         
            cy.get('.product').first().click();
    

            cy.get('.add-to-cart-button').click();
    
     
            cy.get('.cart-icon').should('contain', '1');
    
 
            cy.get('.cart-icon').click();
    
    
            cy.get('.cart-item').should('exist');
    
        
            cy.get('.checkout-button').click();
    

            cy.get('input[name="name"]').type('Test Name');
            cy.get('input[name="address"]').type('123 Test Street');
            cy.get('input[name="city"]').type('Test City');
            cy.get('input[name="postal-code"]').type('12345');
            cy.get('select[name="country"]').select('Test');
            cy.get('input[name="phone"]').type('123456789');
            cy.get('input[name="email"]').type('email@test.com');
    
            cy.get('.submit-order-button').click();
    
        
            cy.get('.order-confirmation-message').should('exist');
        })
    })

