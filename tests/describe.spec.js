import { test } from '@playwright/test'
import { describe } from 'node:test'
let url="https://www.amazon.in/"

test.describe('opening the browser',()=>
{
    test.beforeAll('',async({page})=>{
        console.log("open the browser");
        
    }
    )
    test.beforeEach('',async({page})=>
    {
        console.log("login page displayed");
        
    })
    test.afterEach('',async({page})=>
    {
          console.log("logout done");
          
    })
    test.afterAll('',async({page})=>
    {
        console.log("close the browser");
        
    })

    test('login',async({page})=> {
       await page.goto(url)
        console.log("login");
        
    })
    test('homepage',async({page})=>{
       await page.goto(url)
        console.log("home page is displayed");
        

    })
    
    test('logout',async({page})=>
    {
      await page.goto(url)
        console.log("logout");
        
    })
})