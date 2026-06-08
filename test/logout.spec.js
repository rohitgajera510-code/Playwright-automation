const { test, expect } = require('@playwright/test');

test('logout test', async ({ page }) => {

    // Login first
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Click burger menu
    await page.click('#react-burger-menu-btn');

    // Click logout
    await page.click('#logout_sidebar_link');

    // Verify back to login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');

});

test('remove from cart', async ({ page }) => {

    // Login first
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add item to cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    // Verify cart shows 1
    await expect(page.locator('.shopping_cart_badge'))
    .toContainText('1');

    // Remove item from cart
    await page.click('[data-test="remove-sauce-labs-backpack"]');

    // Verify cart is empty
    await expect(page.locator('.shopping_cart_badge'))
    .not.toBeVisible();

});

test('checkout test', async ({ page }) => {

    // Login first
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add item to cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    // Go to cart
    await page.click('.shopping_cart_link');

    // Click checkout
    await page.click('[data-test="checkout"]');

    // Fill checkout details
    await page.fill('[data-test="firstName"]', 'Rohit');
    await page.fill('[data-test="lastName"]', 'Gajera');
    await page.fill('[data-test="postalCode"]', '380001');

    // Click continue
    await page.click('[data-test="continue"]');

    // Click finish
    await page.click('[data-test="finish"]');

    // Verify order complete
    await expect(page.locator('[data-test="complete-header"]'))
    .toContainText('Thank you for your order!');

});