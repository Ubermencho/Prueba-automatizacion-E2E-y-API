const sauceDemo = require('../pages/sauceDemoShop')


const{
    When
} = require('@wdio/cucumber-framework')
const utils = require('../utils/utils')


When(/^the user inputs valid credentials$/, async()=>{
    await sauceDemo.inputValidCredentials()
})

When(/^The user clicks the login button$/, async()=>{
    await sauceDemo.loginButtonClick()
})