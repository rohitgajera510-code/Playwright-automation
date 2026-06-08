const { test, expect } = require('@playwright/test');
/*
test('successful login', async ({ page }) => {
    
    // Step 1 - Open the website
    await page.goto('https://www.saucedemo.com');
    
    // Step 2 - Type username
    await page.fill('#user-name', 'standard_user');
    
    // Step 3 - Type password
    await page.fill('#password', 'secret_sauce');
    
    // Step 4 - Click login button
    await page.click('#login-button');
    
    // Step 5 - Check if login was successful
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
       
});
*/
test('failed login - wrong password', async ({ page }) => {

    // Step 1 - Open the website
    await page.goto('https://www.saucedemo.com');

    // Step 2 - Type correct username
    await page.fill('#user-name', 'standard_user');

    // Step 3 - Type WRONG password
    await page.fill('#password', 'wrongpassword');
    
    await page.click('#login-button');

    await page.fill('#password', '$#@$#@432df');

    await page.click('#login-button');

    await page.fill('#password', '   ');

    await page.click('#login-button');

    // Step 5 - Check error message appears
    await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');

});