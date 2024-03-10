const sauceDemo = require('../pages/sauceDemoShop')


const{
    Given
} = require('@wdio/cucumber-framework')
const utils = require('../utils/utils')


Given(/^that the user is in the login page$/, async()=>{
    await sauceDemo.verifyLoginPageLoaded()
})

Given(/^that the user is in the inventory page$/, async()=>{
    await sauceDemo.verifyUserLoggedIn()
})

Given(/^that the user is on cart page$/, async()=>{
    await sauceDemo.verifyCartPageURL()
})

Given(/^that the user is on the checkout form$/, async()=>{
    await sauceDemo.verifyUserOnCheckoutForm()
})

Given(/^that the user is on the checkout overview page$/, async()=>{
    await sauceDemo.verifyUserOnCheckoutOverview()
})