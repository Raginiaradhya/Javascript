import {test} from '@playwright/test'
import { Login, Login1 } from './pom/login1.page'
import logdata from "../testdata/data1.json"
test('Login Swag Labs', async({page})=>
{
    await page.goto('https://id.heroku.com/login')
    let l=new Login1(page)
    await l.login('tomsmith@gmail.com','SuperSecretPassword!')
   await page.waitForTimeout(1000)
})