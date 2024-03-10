import 'cypress-plugin-api'

describe("API test flow for the pet store", ()=>{

  it("create a new user through signup", ()=>{
      cy.api({
          method:'POST',
          url:Cypress.env('baseUrl')+'/user/createWithArray',
          body:[{
            "id": 401977,
            "username": Cypress.env("username"),
            "firstName": "Oscar",
            "lastName": "Flores",
            "email": "example@oscar.com",
            "password": "P@55w0rd",
            "phone": "94949494",
            "userStatus": 0
          }],
      }).then((response)=>{
          expect(response.status).to.eq(200)
          expect(response.body.message).to.eq("ok")
      })
  })

  it("gets the created user", ()=>{
    cy.api({
        method:'GET',
        url:Cypress.env('baseUrl')+'/user/'+Cypress.env("username"),
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(401977)
        expect(response.body.username).to.eq(Cypress.env("username"))
    })
  })

  it("update user name and email", ()=>{
    cy.api({
        method:'PUT',
        url:Cypress.env('baseUrl')+'/user/'+Cypress.env("username"),
        body:{
          "id": 401977,
          "username": Cypress.env("updatedUsername"),
          "firstName": "Juan",
          "lastName": "Perez",
          "email": "Juan@perez.com",
          "password": "P@55w0rd",
          "phone": "94949494",
          "userStatus": 0
        },
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
  })

  it("gets the updated user", ()=>{
    cy.api({
        method:'GET',
        url:Cypress.env('baseUrl')+'/user/'+Cypress.env("updatedUsername"),
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
  })

  it("deletes the user", ()=>{
    cy.api({
        method:'DELETE',
        url:Cypress.env('baseUrl')+'/user/'+Cypress.env("updatedUsername"),
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
  })

  
});