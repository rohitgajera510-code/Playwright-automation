const { test, expect } = require('@playwright/test');

test('checkout - empty first name', async ({ page }) => {

    // Login
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add item and go to checkout
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');

    // Leave first name empty
    await page.fill('[data-test="firstName"]', '');
    await page.fill('[data-test="lastName"]', 'Gajera');
    await page.fill('[data-test="postalCode"]', '380001');
    await page.click('[data-test="continue"]');

    // Verify error message
    await expect(page.locator('[data-test="error"]'))
    .toContainText('First Name is required');

});

test('checkout - empty last name', async ({ page }) => {

    // Login
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add item and go to checkout
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');

    // Leave last name empty
    await page.fill('[data-test="firstName"]', 'Rohit');
    await page.fill('[data-test="lastName"]', '');
    await page.fill('[data-test="postalCode"]', '380001');
    await page.click('[data-test="continue"]');

    // Verify error message
    await expect(page.locator('[data-test="error"]'))
    .toContainText('Last Name is required');

});

test('checkout - empty postal code', async ({ page }) => {

    // Login
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add item and go to checkout
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');

    // Leave postal code empty
    await page.fill('[data-test="firstName"]', 'Rohit');
    await page.fill('[data-test="lastName"]', 'Gajera');
    await page.fill('[data-test="postalCode"]', '');
    await page.click('[data-test="continue"]');

    // Verify error message
    await expect(page.locator('[data-test="error"]'))
    .toContainText('Postal Code is required');

});

test('add to cart - verify multiple items', async ({ page }) => {

    // Login
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Add 2 different items
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

    // Verify cart shows 2
    await expect(page.locator('.shopping_cart_badge'))
    .toContainText('2');

});