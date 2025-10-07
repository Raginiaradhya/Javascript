import{test,expect} from '@playwright/test'
import path from 'path'
test.only('upload',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    console.log(__dirname);
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'../S.docx'))
   await page.getByRole('button',{name:"Upload Single File"}).click()

   console.log(await page.locator("#singleFileInput").textContent());
   // page.locator("singleFileInput").textContent()

    
})

test.skip('upload multiple file',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    console.log(__dirname);
    await page.locator('#multipleFilesInput').setInputFiles([
        path.join(__dirname,'../S.docx'),
        path.join(__dirname,'../b.docx')]
    );
    await page.getByRole('button',{name:"Upload Single File"}).click()
    await page.getByRole('button', {name:"Upload Multiple Files"}).click()

    
})

