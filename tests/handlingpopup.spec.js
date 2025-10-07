import {test,expect, chromium  } from "@playwright/test";
test.skip('handling browser popup', async({browser})=>
{
   const context=await browser.newContext()
   const page=await context.newPage()
   await page.goto("https://demoapps.qspiders.com/")
   await page.getByText('UI Testing Concepts').click()
   await page.getByText('Popups').click()
   await page.getByText('Browser Windows').click()
   const pp=context.waitForEvent('page')
   await page.getByRole('button',{name:"view more"}).first().click()
   const newpage=await pp
   await newpage.getByRole('button',{name:"Add to Cart"}).click()
   await newpage.locator("//*[local-name()='svg']").click()
   await newpage.waitForTimeout(2000)
   console.log(await context.pages()); // display properties in the browser ex- height , width
   const pg=await context.pages()
   console.log(await pg.length);// array of pages
  let maintab =pg[0]
  let childtab=pg[1]
  console.log(await maintab.title());
  console.log(await childtab.title());
  await maintab.bringToFront()
  await childtab.close()
  console.log(pg.length);
  
  })
  
  test.skip('confirmation popup',async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0')
    page.on('dialog',async dialog=>
    {
       await  console.log(dialog.message());
      await  dialog.accept()
      await expect(dialog.message()).toContain('delete')



        
    })
    await page.locator('//tbody/tr[1]/td/input').check()
    await page.getByRole('button',{name:"Delete",exact:true}).click()


    



})
test.only('promt popup',async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')
    page.on('dialog',async dialog=>
    {
       await  console.log(dialog.message());
      await  dialog.accept("javascript")
      await expect(dialog.message()).toContain('Enter a comment')



        
    })
    await page.getByRole('checkbox',{type:"checkbox",exact:true}).first().check()
    await page.getByRole('button',{name:"Delete",exact:true}).click()


    



})