export class Login1
{
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page)
    {
        this.page=page
        this.untf= page.getByPlaceholder('Email address')
        this.pwdtf=page.locator('//input[@class="form-control password"]')
        this.logbtn=page.locator('//button[@type="submit"]')

    }
    async login(un,pwd)
    {
       await this.untf.fill(un)
        await this.pwdtf.fill(pwd)
       await this.logbtn.click()
    }
}
