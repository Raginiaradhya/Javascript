import { Searchdata } from "./pom/search1.page";
import {test,expect} from '@playwright/test';
import { CartPage } from "./pom/cart.page";
test('search action',async({browser})=>
{
   const context=await browser.newContext()
   const page=await context.newPage()
   const srpage= new Searchdata(page)

   await page.goto('https://www.amazon.in/')
   await srpage.search("iphone")
  
   //await srpage.applyPriceFilter()
 
   const c=context.waitForEvent('page')
    await srpage.selectFirstProduct()
   let newpage=await c;
   const cpage=new CartPage(newpage)
    let d= await cpage.prodname.textContent()
    console.log(d);
    
   await cpage.addToCart()
   await cpage.clickOnCart()
   let e= await cpage.cartpage.textContent()
   console.log(e);
   
   expect(d.trim()).toEqual(e)
   
   
    })
  
   

