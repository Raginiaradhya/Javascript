export class CartPage
{
     /**
     * @param {import('playwright').Page} page
     */
    constructor(page)
    {
         this.page=page
        this.cart=page.locator('//input[@title="Add to Shopping Cart"]').last()
        this.cartbtn=page.locator('//span[@class="nav-cart-icon nav-sprite"]')
        this.cartpage=page.locator('//span[.="Apple iPhone 15 (128 GB) - Black"]').last()
        this.prodname = page.locator('#productTitle').first()
    }
     async addToCart()
    {
        await this.cart.click()
    }
    async clickOnCart()
    {
     await this.cartbtn.click()
    }
}