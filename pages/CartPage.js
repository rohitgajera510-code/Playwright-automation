class CartPage {

    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async removeFromCart() {
        await this.removeButton.click();
    }

    async goToCart() {
        await this.cartLink.click();
    }

}

module.exports = { CartPage };