class ProductPage {

    constructor(page) { 
        this.page = page;
        this.addBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addBikeLightBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
        // save your selectors here
    }

    async addBackpack() {
        await this.addBackpackBtn.click();
    }

    async addBikeLight() {
       await this.addBikeLightBtn.click();
    }

    async goToCart() {
        await this.cartLink.click();
    }

}

module.exports = { ProductPage };