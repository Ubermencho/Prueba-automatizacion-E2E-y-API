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

    get addCartShirtButton(){
        return $("button#add-to-cart-sauce-labs-bolt-t-shirt")
    }

    get cartButton(){
        return $("div#shopping_cart_container > .shopping_cart_link")
    }

    get cartNumberBadge(){
        return $(".shopping_cart_badge")
    }

    get fisrtCartItem(){
        return $(".cart_list .cart_item:nth-of-type(3) .inventory_item_name")
    }

    get secondCartItem(){
        return $(".cart_list .cart_item:nth-of-type(4) .inventory_item_name")
    }

    get checkoutButton(){
        return $("button#checkout")
    }

    get checkoutFormFirstNameField(){
        return $("input#first-name")
    }

    get checkoutFormLastNameField(){
        return $("input#last-name")
    }

    get checkoutFormZIPField(){
        return $("input#postal-code")
    }

    get checkoutFormContinueButton(){
        return $("input#continue")
    }

    get checkoutOverviewTotal(){
        return $(".summary_info_label.summary_total_label")
    }

    get checkoutOverviewFinishButton(){
        return $("button#finish")
    }

    get checkoutOverviewSuccessMessage(){
        return $("div#checkout_complete_container > .complete-header")
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

    verifyAddCartShirtButtonDisplayed = async() =>{
        await expect(this.addCartShirtButton).toBeDisplayed()
    }

    addCartBackpackButtonClick = async()=>{
        await this.addCartBackpackButton.click()
    }

    addCartShirtButtonClick = async()=>{
        await this.addCartShirtButton.click()
    }

    verifyCartBadgeNumberCorrect = async()=>{
        await expect(this.cartNumberBadge).toHaveText("2")
    }

    verifyCartButtonDisplayed = async()=>{
        await expect(this.cartButton).toBeDisplayed()
    }

    cartButtonClick = async()=>{
        await this.cartButton.click()
    }

    verifyCartPageURL = async()=>{
        await expect(browser).toHaveUrlContaining("cart.html")
    }

    verifyDesiredItemsOnCart = async()=>{
        await expect(this.fisrtCartItem).toHaveText(utils.desiredItem1Text)
        await expect(this.secondCartItem).toHaveText(utils.desiredItem2Text)
    }

    checkoutButtonClick = async()=>{
        await expect(this.checkoutButton).toBeDisplayed()
        await this.checkoutButton.click()
    }

    verifyUserOnCheckoutForm = async()=>{
        await expect(browser).toHaveUrlContaining("checkout-step-one.html")
        await expect(this.checkoutFormFirstNameField).toBeDisplayed()
        await expect(this.checkoutFormLastNameField).toBeDisplayed()
        await expect(this.checkoutFormZIPField).toBeDisplayed()
        await expect(this.checkoutFormContinueButton).toBeDisplayed()
    }

    inputValidDataCheckoutForm = async()=>{
        await this.checkoutFormFirstNameField.setValue(utils.checkoutFirstName)
        await this.checkoutFormLastNameField.setValue(utils.checkoutLastName)
        await this.checkoutFormZIPField.setValue(utils.checkoutZIPCode)
    }

    checkoutFormContinueButtonClick = async()=>{
        await this.checkoutFormContinueButton.click()
    }

    verifyUserOnCheckoutOverview = async()=>{
        await expect(browser).toHaveUrlContaining("checkout-step-two.html")
    }

    verifyTotalAmountCorrect = async()=>{
        let amount
        amount = await this.checkoutOverviewTotal.getText()
        let total = parseFloat(amount.slice((amount.length-5), amount.length))
        await expect(total).toEqual(utils.expectedTotal)
    }

    checkoutOverviewFinishButtonClick = async()=>{
        await this.checkoutOverviewFinishButton.click()
    }

    verifySuccessCheckout = async()=>{
        await expect(browser).toHaveUrlContaining("checkout-complete.html")
        await expect(this.checkoutOverviewSuccessMessage).toBeDisplayed()
        await expect(this.checkoutOverviewSuccessMessage).toHaveText(utils.expectedSuccessMessage)
    }

    

}

module.exports = new sauceDemoShop()
