import MainScreen from "../pageobjects/MainScreen";


const {Given, When, Then} = require('@cucumber/cucumber');


Given(/^I launch the app$/, async () => {
   // driver.launchApp();
    await MainScreen.waitForIsShown(true);
});

When(/^I tap on Sign In button$/, async () => {
    await MainScreen.tapOnSignIn();
});



Then(/^I should see an Error Message$/, async () => {
    await expect(await MainScreen.isErrorMessageDisplayed()).toEqual(true);
});