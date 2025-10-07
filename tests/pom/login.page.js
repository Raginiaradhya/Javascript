export class Login
{
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page)
    {
        this.page=page
        this.untf= page.locator('//input[@type="text"]')
        this.pwdtf=page.locator('//input[@type="password"]')
        this.logbtn=page.locator('#login-button')

    }
    async login(un,pwd)
    {
       await this.untf.fill(un)
        await this.pwdtf.fill(pwd)
       await this.logbtn.click()
    }
}
