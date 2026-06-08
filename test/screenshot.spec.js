const { test, expect } = require('@playwright/test');


test('failed login screenshot', async ({ page }) => {

    // Open website
    await page.goto('https://www.saucedemo.com');

    // Login with wrong password
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrongpassword');
    await page.click('#login-button');

    // This will FAIL — wrong URL expected
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});