export class Automex
{
    /**
     * 
     * @param {import('playwright').Page} page
     */
    constructor(page)
    {
        this.page=page
        this.signin=page.getByRole('link',{name:" Signup / Login"})
        this.lname=page.locator('//input[@data-qa="signup-name"]')
        this.ename=page.locator('//input[@data-qa="signup-email"]')
        this.signupbtn=page.locator('//button[@data-qa="signup-button"]')
        this.btn=page.locator('#uniform-id_gender2')
        this.pwd=page.locator('//input[@type="password"]')
        this.cname=page.locator('#first_name')
        this.clname=page.locator('#last_name')
        this.address=page.locator('#address1')
        this.country=page.locator('#country')
        this.state=page.locator('#state')
        this.city=page.locator('#city')
        this.zipcode=page.locator('#zipcode')
        this.mobilenum=page.locator('#mobile_number')
        this.cacc=page.getByRole('button',{name:'Create Account'})
        this.continue=page.getByRole('link',{name:'Continue'})
        this.logout=page.getByRole('link',{name:' Logout'})
        this.signin=page.getByRole('link',{name:" Signup / Login"})
        this.email= page.locator('//input[@placeholder="Email Address"]').first()
        this.pwd1=page.getByPlaceholder('Password')
        this.login=page.locator("//button[.='Login']")
    }
    async signInpage(un,email)
    {
        await this.signin.click()
        await this.lname.fill(un)
        await this.ename.fill(email)
        await this.signupbtn.click()

    }
    // async signInDetails(passwd,cuname,culname,addr,st,cty,zpc,mbnum,option)
    // {
    //     await this.btn.check()
    //     await this.pwd.fill(passwd)
    //     await this.cname.fill(cuname)
    //     await this.clname.fill(culname)
    //     await this.address.fill(addr)
    //     await this.country.selectOption(option)
    //     await this.state.fill(st)
    //     await this.city.fill(cty)
    //     await this.zipcode.fill(zpc)
    //     await this.mobilenum.fill(mbnum)
    //     await this.cacc.click()
    //     await this.continue.click()
    //     await this.logout.click()
        

    // }
     async loginCredential(ename,pwd)
    {
         await this.signin.click()
        await this.email.fill(ename)
        await this.pwd1.fill(pwd)
        await this.login.click()
    }
}