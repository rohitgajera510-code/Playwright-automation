class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.successMessage = page.locator('[data-test="complete-header"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async checkout(firstName, lastName, postalCode) {
        await this.checkoutButton.click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }

    async finish() {
        await this.finishButton.click();
    }

}

module.exports = { CheckoutPage };