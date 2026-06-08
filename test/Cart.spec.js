const { test, expect } = require('@playwright/test');

test('add product to cart', async ({ page }) => {

    // Step 1 - Open website
    await page.goto('https://www.saucedemo.com');

    // Step 2 - Login first
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Step 3 - Click Add to Cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    // Step 4 - Check cart count is 1
    await expect(page.locator('.shopping_cart_badge'))
    .toContainText('1');

});