import{test,expect} from '@playwright/test';
let url = "https://www.amazon.in/"
test.skip('has title',async({page})=>{


    await page.goto(url);
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
});


test.skip('get amazon.in attribute value', async ({ page }) => {
  await page.goto(url);

  const link = page.locator('//a[@aria-label="Amazon.in"]');
  

  const value = await link.getAttribute('aria-label');
  console.log(value); 

  await page.getByPlaceholder
});

test.only('enter text in search box', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
   console.log(await page.title());
  await page.getByPlaceholder("Enter Name").fill("Lisha");
  await page.getByPlaceholder("Enter EMail").fill("raginirock.90@gmail.com")
  await page.locator("#textarea").fill("utthrahalli")
  await page.getByRole('radio',{name:'Male',exact:true}).check()
  await page.getByRole('checkbox',{name:'Monday'}).check()
  await expect( page.getByTitle("Automation Testing Practice - Atom"))

 
}

)
