import {test} from '@playwright/test'
import { Login } from './pom/login.page'
import logdata from "../testdata/data.json"
test('Login Swag Labs', async({page})=>
{
    await page.goto('https://www.saucedemo.com/')
    let l=new Login(page)
    //page.goto('https://www.saucedemo.com/')
    
   await l.login('standard_user','secret_sauce')
   await page.waitForTimeout(1000)
})