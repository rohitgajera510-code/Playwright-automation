const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
});

test('successful login with POM', async ({ page }) => {
    // Verify login was successful
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('add to cart with POM', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.addToCart();
    await expect(cartPage.cartBadge).toContainText('1');
});

test('checkout with POM', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Add to cart
    await cartPage.addToCart();
    await cartPage.goToCart();

    // Checkout
    await checkoutPage.checkout('Rohit', 'Gajera', '380001');
    await checkoutPage.finish();

    // Verify success
    await expect(checkoutPage.successMessage)
    .toContainText('Thank you for your order!');
});

test('failed login with POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrongpassword');
    await expect(loginPage.errorMessage)
    .toContainText('Username and password do not match');
});