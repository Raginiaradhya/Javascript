import {test,expect, chromium  } from "@playwright/test";
test.skip('has title',async({page})=>{


    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    console.log(await page.viewportSize());
    await page.waitForTimeout(2000)
    await page.setViewportSize({width:1000,height:3000})
     console.log(await page.viewportSize());
     console.log(await page.title());
      console.log(await page.url());
    const searchBox = page.locator('#twotabsearchtextbox');
    await searchBox.press('Enter');
    await page.screenshot({ path: 'amazon-product.png' });
    await page.goBack()
    




     

    
});
test.skip(" ",async({browser}) => {
    let browser1=await chromium.launch()
    let context =await browser1.newContext()
    let p1=await context.newPage()
    await p1.goto("https://www.amazon.in/");
    
    

});

test.skip('amazon log',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#draggable').dragTo(page.locator('#droppable'));
        //page.content()
    //   let p2 = await page.getByAltText('amazon logo');
     // p2.click()
//      console.log(p2);
//     let t1= await page.locator("#colors").textContent()
//     console.log(t1);

//   let t2 = await page.locator("#colors").innerHTML()
//   console.log(t2);
//   let t3=await page.locator("#colors").innerText()
//   console.log(t3);
  
  
    

     
})
test.skip('get select option text',async({page})=>
{
    page.goto("https://testautomationpractice.blogspot.com/")
    let t1= await page.locator("#colors").textContent()
    console.log(t1);
    
  let t2 = await page.locator("#colors").innerHTML()
  console.log(t2);
  let t3=await page.locator("#colors").innerText()
  console.log(t3);
})
 test('button to click', async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    //await page.getByRole('button', { name: /yes/i }).click();
    

})