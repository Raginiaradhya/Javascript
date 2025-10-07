import { test, expect } from '@playwright/test';;
test.skip('get elements' , async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

  let countrytxt=await page.locator('//select[@id="country"]/option').allTextContents();
  //console.log(countrytxt);
  
   for(let ele of countrytxt)
   {
      if(ele.includes("India"))
      {

         console.log(ele + 'text found');
         
      }
      // else
      // {
      //    console.log('not found');
         
      // }
      
   }





//    await expect(page).toHaveTitle('Automation Testing Practice')
//    await page.getByPlaceholder('Enter Name').fill("Kushi")
//    //await page.getByLabel("Email:",{exact:true}).fill("ra@gmail.com") 
//    let c=await page.getByText("For Selenium, Cypress & Playwright").isVisible()
//    console.log(c);
//    await page.locator("//button[@onclick='toggleButton(this)']").click()
//   // await expect( page.getByTitle("Automation Testing Practice - Atom")).toBeVisible()
//    await page.locator("#sunday").check()
//    await page.locator("#sunday").uncheck()
//    let countrylst=await page.locator("#country").click()



   




   


})

test('getting color text',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
  let r=await page.locator('#colors').textContent()
console.log(r);
})
