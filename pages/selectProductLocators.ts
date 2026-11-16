import {Page,Locator} from '@playwright/test';

export class selectProductLocators{
    selectprodpage:Page;
    addToCartProduct1:Locator;
    addToCartProduct2: Locator;
    goToCart:Locator;
    cartCount: Locator;

constructor (selprodpage:Page)
{
    this.selectprodpage = selprodpage;
    this.addToCartProduct1 = selprodpage.locator('#add-to-cart-sauce-labs-backpack');
    this.addToCartProduct2 = selprodpage.locator('#add-to-cart-sauce-labs-bike-light');
    this.goToCart = selprodpage.locator('.shopping_cart_link');
    this.cartCount = selprodpage.locator('.shopping_cart_badge');
}
   
async selectAndAddProduct()
{
await this.addToCartProduct1.click();
await this.addToCartProduct2.click();
await this.goToCart.click();

};

async countProductinCart()
{
if (await this.cartCount.isVisible())
    {
        const cartNumber = await this.cartCount.textContent();
        console.log("Total items in the cart is", cartNumber);

    }
};

}