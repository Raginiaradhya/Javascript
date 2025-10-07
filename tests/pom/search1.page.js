export class Searchdata
{
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page)
    {
        this.page=page
        this.searchtf= page.getByPlaceholder('Search Amazon.in')
         this.sear=page.locator('#nav-search-submit-button')
        //this.pricefilt=page.getByRole('link',{name:"₹27,000 - ₹34,500"})
        //this.sear=page.locator('#nav-search-submit-button')
        this.product=page.locator('//img[@class="s-image"]').first()
      
        //this.cart=page.locator('//input[@title="Add to Shopping Cart"]').first()
        //this.price=page.locator('//span[@class="a-price-whole"]').first()
    }
    async search(srtf)
    {
        await this.searchtf.fill(srtf)
        await this.sear.click()
        

    }
    // async applyPriceFilter() {
    //     await this.pricefilt.click();
    // }
    async selectFirstProduct() {
        await this.product.click()
    }
    

}