import 'cypress-plugin-api'

describe("API test flow for the pet store", ()=>{

  it("create a new user through signup", ()=>{
      cy.api({
          method:'POST',
          url:Cypress.env('baseUrl')+'/user/createWithArray',
          body:[{
            "id": Cypress.env("userID"),
            "username": Cypress.env("username"),
            "firstName": Cypress.env("initialFirstName"),
            "lastName": Cypress.env("initialLastName"),
            "email": Cypress.env("initialEmail"),
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
        expect(response.body.id).to.eq(Cypress.env("userID"))
        expect(response.body.username).to.eq(Cypress.env("username"))
        expect(response.body.firstName).to.eq(Cypress.env("initialFirstName"))
        expect(response.body.lastName).to.eq(Cypress.env("initialLastName"))
        expect(response.body.email).to.eq(Cypress.env("initialEmail"))
    })
  })

  it("update user name and email", ()=>{
    cy.api({
        method:'PUT',
        url:Cypress.env('baseUrl')+'/user/'+Cypress.env("username"),
        body:{
          "id": Cypress.env("userID"),
          "username": Cypress.env("updatedUsername"),
          "firstName": Cypress.env("updatedFirstName"),
          "lastName": Cypress.env("updatedLastName"),
          "email": Cypress.env("updatedEmail"),
          "password": "P@55w0rd",
          "phone": "94949494",
          "userStatus": 0
        },
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(parseInt(response.body.message)).to.eq(Cypress.env("userID"))
    })
  })

  it("gets the updated user", ()=>{
    cy.api({
        method:'GET',
        url:Cypress.env('baseUrl')+'/user/'+Cypress.env("updatedUsername"),
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(Cypress.env("userID"))
        expect(response.body.username).to.eq(Cypress.env("updatedUsername"))
        expect(response.body.firstName).to.eq(Cypress.env("updatedFirstName"))
        expect(response.body.lastName).to.eq(Cypress.env("updatedLastName"))
        expect(response.body.email).to.eq(Cypress.env("updatedEmail"))
    })
  })

  it("deletes the user", ()=>{
    cy.api({
        method:'DELETE',
        url:Cypress.env('baseUrl')+'/user/'+Cypress.env("updatedUsername"),
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq(Cypress.env("updatedUsername"))
    })
  })

  
});