export class Flogin
{
    /**
     * 
     * @param {import('playwright').Page} page
     */        

    constructor(page)
    {
        // this.page=page
        // this.srpage=page.getByPlaceholder('Search for Products, Brands and More').first()
        // this.flightclk=page.locator('//div[.="in Digital Voucher Code"]')
        // this.flights=page.locator('//a[.="Flights"]')
        this.flights=page.locator('//span[text()="Flight Bookings"]')
     
        
        
    }
    async srcdetail()
    {
        // await this.srpage.fill(stext)
        // await this.flightclk.click()
        await this.flights.click()
        
        
    }
}