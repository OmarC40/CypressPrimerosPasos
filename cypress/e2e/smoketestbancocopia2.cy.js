describe('Conjunto de pruebas', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type("https://www.liverpool.com.mx/tienda/home{enter}")
        cy.get('.CCgQ5 > span').click()

        
    })


    describe('Search Bar', () => {
        it("Search for Articles",()=>{
            cy.get('#mainSearchbar').type("Technology{enter}")
        })

        it("Search with No Results",()=>{
            cy.get('#mainSearchbar').type("🕸️{enter}")
            cy.get('.o-nullproduct-title-query').contains('Lo sentimos, no encontramos nada para "🕸️"')
             
        })

        it("Search Bar Display",()=>{
            cy.get('#mainSearchbar').should('be.visible')
            cy.get('#mainSearchbar').should('have.css', 'display', 'block');
             
        })
   

    })

     /* describe('Buying a Smart TV', () => {

       

        it.only("Select Smart TV by Brand, Size, and Price Range",()=>{
            cy.get('#mainSearchbar').type("smart tv{enter}");
            cy.get('#mainSearchbar').type("{enter}");
            cy.get('#img_0').should('be.visible')
            cy.get('#brand-HISENSE').click();
            cy.get('#brand-DAEWOO').click();
            cy.get('#brand-HYUNDAI').click();
            cy.get(':nth-child(3) > .a-title__filter > .m-0 > .row > .col-auto > .a-icon__filter > .icon-arrow_up').click()
            cy.get('#variants\.normalizedSize-32\ pulgadas').click();

        })

        it("Select Smart TV by Brand and Price Range",()=>{
            
            cy.get('.o-nullproduct-title-query').contains('Lo sentimos, no encontramos nada para "🕸️"')
             
        })

        it.only("Select Smart TV by Size and Price Range",()=>{
            cy.get('#mainSearchbar').type("smart tv{enter}");
            cy.get('#mainSearchbar').type("{enter}");
            cy.get('#img_0').should('be.visible')
            cy.get('#variants\.normalizedSize-24\ pulgadas').select()
            
            
             
        })

        it("Clear Filters",()=>{
            cy.get('#mainSearchbar').should('have.css', 'display', 'block');
             
        })
   

    })*/

    describe('Create a Consumer Account', () => {
        it("Successful Account Creation",()=>{
            cy.get('.order-lg-4 > .a-header__topLink').click();
            cy.get('.c74028152 > .cccd81a90').should('be.visible');
            cy.get('.c74028152 > .cccd81a90').click()
            cy.get('#email').type("kejet760779@royalka.com")
            cy.get('#password').type("Gelatina10{enter}")
            cy.get('.m-title').should("be.visible")
            cy.get('#input-user__name').type("prueba")
            cy.get('#input-user__apaterno').type("prueba2")
            cy.get('#input-user__amaterno').type("prueba3")
            cy.get('.firstDatePicker > .mdc-ripple-upgraded > .mdc-select > .mdc-select__native-control').select("13")
            cy.get('.middleDatePicker > .mdc-ripple-upgraded > .mdc-select > .mdc-select__native-control').select("Mar")
            cy.get('.lastDatePicker > .mdc-ripple-upgraded > .mdc-select > .mdc-select__native-control').select("1999")
            cy.get('#male').click()
            cy.get('.a-btn').click()


        })

        it("Account Creation with Existing Email",()=>{
            cy.get('.order-lg-4 > .a-header__topLink').click();
            cy.get('.c74028152 > .cccd81a90').should('be.visible');
            cy.get('.c74028152 > .cccd81a90').click()
            cy.get('#email').type("cuarentaomar77@gmail.com")
            cy.get('#password').type("Gelatina10{enter}")
            
             
        })

        it("Weak Password Error",()=>{
            cy.get('.order-lg-4 > .a-header__topLink').click();
            cy.get('.c74028152 > .cccd81a90').should('be.visible');
            cy.get('.c74028152 > .cccd81a90').click()
            cy.get('#email').type("cuarentaomar77@gmail.com")
            cy.get('#password').type("gelatina")
            cy.get('.c22fea258 > .cf1ef5a0b').click()
            cy.get('.ca0060b47 > :nth-child(1)').contains("Su contraseña debe contener:")
             
        })

        it("Logging In with Account",()=>{
            cy.get('.order-lg-4 > .a-header__topLink').click()
            cy.get('#username').type("cuarentaomar77@gmail.com")
            cy.get('#password').type("Gelatina10{enter}")
            cy.get('.firstDatePicker > .mdc-ripple-upgraded > .mdc-select > .mdc-select__native-control').select("13")
            cy.get('.middleDatePicker > .mdc-ripple-upgraded > .mdc-select > .mdc-select__native-control').select("Mar")
            cy.get('.lastDatePicker > .mdc-ripple-upgraded > .mdc-select > .mdc-select__native-control').select("1999")
            
             
        })

   

    })

   
})

























































































































