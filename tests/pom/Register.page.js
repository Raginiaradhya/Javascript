export class Registerpage
{
    /**
     * @param {import('playwright').Page} page
     */

    constructor(page)
    {
        this.page=page
        this.nametf=page.getByPlaceholder("Enter your name")
        this.emailtf=page.getByPlaceholder("Enter Your Email")
        this.pwdtf=page.getByPlaceholder("Enter your password")
        this.rgstrbtn=page.getByRole('button',{name:'Register'})
    }
    async register(username,email,pwd)
    {
        //await expect(this.nametf).toBeEditable()
        await this.nametf.fill(username)
        await this.emailtf.fill(email)
        await this.pwdtf.fill(pwd)
        await this.rgstrbtn.click()
    }
}