const sauceDemo = require('../pages/sauceDemoShop')


const{
    Then
} = require('@wdio/cucumber-framework')
const utils = require('../utils/utils')


Then(/^the user is logged in$/, async()=>{
    await sauceDemo.verifyUserLoggedIn()
    await sauceDemo.verifyAddCartBackpackButtonDisplayed()
})