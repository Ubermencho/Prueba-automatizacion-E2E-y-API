Feature: SauceDemoShop

   E2E purchase flow

Scenario: User logs in to the website
Given that the user is in the login page
When the user inputs valid credentials
And The user clicks the login button
Then the user is logged in

Scenario: User adds two items to their cart
