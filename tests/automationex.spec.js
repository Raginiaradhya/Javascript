import {test,expect} from '@playwright/test'
import autodata from '../testdata/autodata.json'
import { Automex } from './pom/autologin.page'
import { autologin } from './pom/loginautoex.page'
//import tdata from '../testdata/autodata.json'

autodata.forEach(({url,name,email,pwd,cuname,culname,address,state,city,country,Zipcode,Mobilenum},index)=>{
    


test(`customer details ${index+1}`,async({page})=>{
 await page.goto(url)
  let apage=new Automex(page)
 await apage.signInpage(name,email)
 //await apage.signInDetails(pwd,cuname,culname,address,state,city,Zipcode,Mobilenum,country)
 //await page.waitForTimeout(2000)
 await apage.loginCredential(email,pwd)
 await page.waitForTimeout(2000)

 



}
)






    })


// test('login automation',async({page})=>
// {
//     await page.goto(autodata.url)
//     let lp= new autologin(page)
//     await lp.loginCredential(autodata.email,autodata.pwd)
//     await page.waitForTimeout(2000)


// })