export class Productpage
{
     /**
     * @param {import('playwright').Page} page
     */
    constructor(page)
    {
        this.page=page
        this.addToCartBtn = page.locator('#add-to-cart-button')
        this.cartBtn=page.locator('#nav-cart')

    }
    async addToCart()
    {
        await this.addToCartBtn.click()

    }
    async goToCart()
    {
          await this.cartBtn.click()
    }

    
}