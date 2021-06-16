describe("Test depot pfe",()=>{
    it("Does not do much", ()=>{
        expect(true).to.equal(true)
    })
    it.only("successfully loads",()=>{
        cy.visit("/")
    })
    it.only("successfully added a pfe",()=>{
        cy.visit("/student/60c97a13944365476c18ed41")
        //cy.get('[href="/admin/addProf"]')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .cal-icon > .form-control').type("mayssa")
        cy.wait(3000)
        cy.get('#datetimepicker3').type("bus track")
        cy.wait(3000)
        cy.get(':nth-child(2) > .col-md-6 > .form-group > .cal-icon > .form-control').type("Amine zribi")
        cy.wait(3000)
        cy.get(':nth-child(3) > .form-control').type("some description....")
        cy.wait(3000)
        cy.get('.m-t-20 > .btn').click()

        
        
    })
})