import { test, expect } from '@playwright/test';
test.skip('wait for timeout',async({page})=>
{
  await page.goto('https://demoapps.qspiders.com/ui')
  await page.getByPlaceholder('Enter your name').click()
 await  page.keyboard.type("javascript")
 await page.keyboard.insertText("javascript")
 await page.locator('//input[@name="handleInput"]').click()
 await page.keyboard.down('r')
 await page.waitForTimeout(1000)
 await page.keyboard.up('r')
await page.getByPlaceholder('Enter Password').click({button:"left"})

})


test.skip('drag and drop',async({page})=>{

    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    await page.getByText('Mobile Charger').dragTo(page.getByText('Mobile Accessories'))
    await page.getByText('Mobile Cover').dragTo(page.getByText('Mobile Accessories'))
    await page.getByText('Laptop Charger').dragTo(page.getByText('Laptop Accessories'))
    await page.getByText('Laptop Cover').dragTo(page.getByText('Laptop Accessories'))
}

)
test.skip('manual drag and drop', async({page})=>{
await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
 page.getByText('Mobile Charger').hover
 await page.mouse.down()
 page.getByText('Mobile Accessories').hover
 await page.mouse.up()

    
}
)

test.only('boundingbox', async({page})=>{
  await page.goto('https://www.amazon.in/')
  const r = page.locator('#twotabsearchtextbox')
 const box = await r.boundingBox()
 await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2)
 //page.waitForTimeout(2000)
 console.log(box);
 


})


