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

When(/^the user adds two items to their cart$/, async()=>{
    await sauceDemo.addCartBackpackButtonClick()
    await sauceDemo.addCartShirtButtonClick()
})

When(/^the user clicks on the cart button$/, async()=>{
    await sauceDemo.verifyCartButtonDisplayed()
    await sauceDemo.cartButtonClick()
})

When(/^their desired items are on the cart$/, async()=>{
    await sauceDemo.verifyDesiredItemsOnCart()
})

When(/^the user clicks on the Checkout button$/, async()=>{
    await sauceDemo.checkoutButtonClick()
})

When(/^the user inputs valid data on the form fields$/, async()=>{
    await sauceDemo.inputValidDataCheckoutForm()
})

When(/^the user clicks on the Continue button$/, async()=>{
    await sauceDemo.checkoutFormContinueButtonClick()
})

When(/^the total amount is correct$/, async()=>{
    await sauceDemo.verifyTotalAmountCorrect()
})

When(/^the user clicks on the finish button$/, async()=>{
    await sauceDemo.checkoutOverviewFinishButtonClick()
})