export class autologin
{
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page)
    {
        this.page=page
        this.signin=page.getByRole('link',{name:" Signup / Login"})
        this.uname= page.locator('.login-email')
        this.pwd=page.locator('.login-password')
        this.login=page.locator("//button[.='Login']")
    }
    async loginCredential(un,passwd)
    {
         await this.signin.click()
        await this.uname.fill(un)
        await this.pwd.fill(passwd)
        await this.login.click()
    }
}