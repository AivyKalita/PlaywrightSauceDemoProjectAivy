import { Page } from '@playwright/test';
import { selectProductLocators } from '../pages/selectProductLocators';

export class selectProductSteps {
    readonly page: Page;
    readonly locators: selectProductLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new selectProductLocators(page);
    }

    async selectAndAddProduct() {
        await this.locators.addToCartProduct1.click();
        await this.locators.addToCartProduct2.click();
        await this.locators.goToCart.click();
    }

    async countProductinCart() {
        if (await this.locators.cartCount.isVisible()) {
            const cartNumber = await this.locators.cartCount.textContent();
            console.log("Total items in the cart is", cartNumber);
        }
    }
}
