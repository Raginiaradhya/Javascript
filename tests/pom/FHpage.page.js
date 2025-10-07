export class FHomePage
{
    /**
     * 
     * @param {import('playwright').Page} page
     */

    constructor(page)
    {
        this.page=page
         this.rtbtn=page.locator('//div[@class="qsHXPi"]').nth(1)
        this.frm=page.locator('//input[@type="text"]').first()
        this.bng=page.locator('//div[.="BLR"]').first()
        this.to=page.locator('//input[@type="text"]').nth(1)
        this.hyd=page.locator('//span[.="Hyderabad"]').last()
        this.fdate=page.locator('.v2VFa- k2khBy rOnAcM z2D4XG')
        this.frmdate=page.locator('//div[@class="tmT+ZQ"]').nth(2)
        this.tdate=page.locator('.v2VFa- k2khBy rOnAcM z2D4XG')
        this.todate=page.locator('//button[text()="6"]').first()
        this.srcbtn=page.locator('//span[.="SEARCH"]')

    }
    async fdetail(frmm,tloc)
    {
        await this.rtbtn.check()
        await this.frm.fill(frmm)
        await this.bng.click()
        await this.to.fill(tloc)
        await this.hyd.click()
        await this.frmdate.click()
        await this.todate.click()
        await this.srcbtn.click()
    }
}
