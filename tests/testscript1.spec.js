import{test,expect} from '@playwright/test'
test('login',async({page})=>
{
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL('https://www.amazon.in/')
    console.log("hi")
})