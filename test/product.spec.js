
const{ test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
});

test.ProductPage('add backpack to cart', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.addBackpack();
    await expect(productPage.cartBadge).toContainText('1');
}   );

test.ProductPage('add bike light to cart', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.addBikeLight();
    await expect(productPage.cartBadge).toContainText('1');
}   );  