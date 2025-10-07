import {test,expect, chromium  } from "@playwright/test";
import path from 'path'
test('identifying text color',async({page})=>{

   await page.goto('https://demoapps.qspiders.com/ui')
//    await expect(page.getByRole('button',{name:'Yes'})).toHaveCSS("background-color","rgb(253, 186, 116)","border-color","rgb(234, 88, 12)")
//    await page.getByRole('button',{name:'Yes'}).click()
//    await expect(page.getByRole('button',{name:'Yes'})).toHaveCSS("background-color","rgb(134, 239, 172)")
   await expect(page.getByRole('button',{name:'Register'})).toHaveCSS("background-color","rgb(249, 115, 22)")

}
)
test.only('identify color',async({page})=>
{
   await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
   const color=await page.getByRole('button',{name:'Continue'}).evaluate((el)=>window.getComputedStyle(el).color)
   console.log("fetched color"+color);
   
//    const actualcolor="rgb(255, 255, 255)"
//    await expect(color).toBe(actualcolor)
   // const width=await page.getByRole('button',{name:'Continue'}).boundingBox().then(box=>box?.width)
  // console.log("width is:"+width);
   
})
test.only("idfg",async({page})=>
{
   console.log("abscfg");
   
})
