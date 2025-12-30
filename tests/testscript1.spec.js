import{test,expect} from '@playwright/test'
test('login',async({page})=>
{
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(2000)
})