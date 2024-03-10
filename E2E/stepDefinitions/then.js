const sauceDemo = require('../pages/sauceDemoShop')


const{
    Then
} = require('@wdio/cucumber-framework')
const utils = require('../utils/utils')


Then(/^the user is logged in$/, async()=>{
    await sauceDemo.verifyUserLoggedIn()
    await sauceDemo.verifyAddCartBackpackButtonDisplayed()
})

Then(/^the cart icon must be updated to reflect these items$/, async()=>{
    await sauceDemo.verifyCartBadgeNumberCorrect()
})

Then(/^the user is redirected to the cart page$/, async()=>{
    await sauceDemo.verifyCartPageURL()
})

Then(/^the user is taken to the checkout form$/, async()=>{
    await sauceDemo.verifyUserOnCheckoutForm()
})

Then(/^the user is taken to the Checkout Overview page$/, async()=>{
    await sauceDemo.verifyUserOnCheckoutOverview()
})

Then(/^the user gets a success message$/, async()=>{
    await sauceDemo.verifySuccessCheckout()
})