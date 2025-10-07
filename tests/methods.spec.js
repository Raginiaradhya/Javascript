import { test, expect } from '@playwright/test';

test.skip('Demo script with 16 Playwright methods', async ({ page }) => {
  // 1. Navigate to site
  await page.goto('https://www.saucedemo.com/');

  // 2. Title check
  await expect(page).toHaveTitle(/Swag Labs/);

  // 3. Fill username
  await page.fill('#user-name', 'standard_user');

  // 4. Type password (simulates real typing)
  await page.type('#password', 'secret_sauce');

  // 5. Click login button
  await page.click('#login-button');

  // 6. Assert page URL after login
  await expect(page).toHaveURL(/inventory/);

  // 7. Locator usage for search (just as example here)
  const firstItem = page.locator('.inventory_item').first();

  // 8. Expect locator is visible
  await expect(firstItem).toBeVisible();

  // 9. Get attribute of element
  const itemName = await firstItem.locator('.inventory_item_name').getAttribute('id');
  console.log('First Item ID:', itemName);

  // 10. Get text content
  const itemText = await firstItem.locator('.inventory_item_name').textContent();
  console.log('First Item Text:', itemText);

  // 11. Screenshot for report
  await page.screenshot({ path: 'after-login.png' });
  await page.waitForTimeout(2000)

  // 12. Select option (dropdown menu not in site, so using example selector)
  await page.selectOption('#dropdown', 'option1');

  // 13. Use keyboard press
  await page.keyboard.press('End'); // scroll to bottom

  // 14. Wait for selector (cart button must appear)
  await page.waitForSelector('.shopping_cart_link');

  // 15. Click using getByRole
  await page.getByRole('link', { name: 'Cart' }).click();

  // 16. Assert cart page heading text
  await expect(page.locator('.title')).toHaveText('Your Cart');
});

test.skip('screenshot',async({page})=>{

   await page.goto('https://demoapps.qspiders.com/ui/image?sublist=0');
   // await page.screenshot({ path: 'amazon-product.png' });
   //await page.screenshot({path:'demoapps.png'})
   //await page.locator('.pb-3').screenshot({path:'demoapps-qspider.png'})
  // await page.locator("//span[.='UPI']").click()
  await page.getByAltText('.order placed').click()

}
)
test('autosuggestions',async({page})=>
{
  await page.goto('https://www.amazon.in/')
  let a=await page.locator('#twotabsearchtextbox').fill("phones")
  // await page.waitForTimeout(2000)
  await page.locator('//div[@role="row"]').last().waitFor();
  let options=await page.locator('//div[@role="row"]').all();
  for(let val of options)
  {
    let b= await val.textContent()
    if(b === "phones under 20k+")
    {
      await val.click()
      break
      
    }
    
  }
  



})
