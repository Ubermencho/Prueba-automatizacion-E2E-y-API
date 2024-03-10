Feature: SauceDemoShop

   E2E purchase flow

Scenario: User logs in to the website
Given that the user is in the login page
When the user inputs valid credentials
And The user clicks the login button
Then the user is logged in

Scenario: User adds two items to their cart
Given that the user is in the inventory page
When the user adds two items to their cart
Then the cart icon must be updated to reflect these items

Scenario: User opens their cart
Given that the user is in the inventory page
When the user clicks on the cart button
Then the user is redirected to the cart page
And their desired items are on the cart

Scenario: User goes to checkout form
Given that the user is on cart page
When the user clicks on the Checkout button
Then the user is taken to the checkout form

Scenario: User completes initial checkout Form
Given that the user is on the checkout form
When the user inputs valid data on the form fields
And the user clicks on the Continue button
Then the user is taken to the Checkout Overview page

Scenario: User confirms their checkout and completes order
Given that the user is on the checkout overview page
And the total amount is correct
When the user clicks on the finish button
Then the user gets a success message
