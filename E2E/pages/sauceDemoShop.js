const utils = require("../utils/utils")

class sauceDemoShop{

    //Selectors for UI elements
    get usernameField(){
        return $("input#user-name")
    }

    get passwordField(){
        return $("input#password")
    }

    get loginButton(){
        return $("input#login-button")
    }

    get addCartBackpackButton(){
        return $("button#add-to-cart-sauce-labs-backpack")
    }


    verifyLoginPageLoaded = async()=>{
        await browser.url(utils.baseUrl)
        await this.loginButton.waitForDisplayed()
        await expect(browser).toHaveUrl("https://www.saucedemo.com/")
        await expect(this.usernameField).toBeDisplayed()
        await expect(this.passwordField).toBeDisplayed()
        await expect(this.usernameField).toBeEnabled()
        await expect(this.passwordField).toBeEnabled()
        await expect(this.loginButton).toBeDisplayed()
    }

    inputValidCredentials = async()=>{
        await this.usernameField.setValue(utils.loginUser)
        await this.passwordField.setValue(utils.loginPass)
    }


    loginButtonClick = async()=>{
        await this.loginButton.click()
    }

    verifyUserLoggedIn = async()=>{
        await expect(browser).toHaveUrlContaining('inventory.html')
    }

    verifyAddCartBackpackButtonDisplayed = async()=>{
        await expect(this.addCartBackpackButton).toBeDisplayed()
    }

}

module.exports = new sauceDemoShop()
