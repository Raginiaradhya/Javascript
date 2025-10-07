import{test} from '@playwright/test'
import tdata from "../testdata/data.json"
import { Registerpage } from '../tests/pom/Register.page.js'

tdata.forEach(({url,name,email,pwd}, index)=>
{

    test(`registerpage #${index+1}`,async({page})=>
{
    await page.goto(url)
    let rpage= new Registerpage(page)
    await rpage.register(name,email,pwd)
    await page.waitForTimeout(1000)
})

})