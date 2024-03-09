const sauceDemo = require('../pages/sauceDemoShop')


const{
    Given
} = require('@wdio/cucumber-framework')
const utils = require('../utils/utils')


Given(/^that the user is in the login page$/, async()=>{
    await sauceDemo.verifyLoginPageLoaded()
})