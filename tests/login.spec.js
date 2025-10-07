import{test} from '@playwright/test'
import path from 'path'
test.skip('authentication',async({browser})=>{
    const context=await browser.newContext(
        {
            httpCredentials:{
                username :'admin',
                password: 'admin'
            }
        }
    )
    const page =await context.newPage()
    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    await page.waitForTimeout(1000)
})
test.only('downloadfile', async({page})=>
{
    const customfolder= '"C:\Users\Ragini\Desktop\Doc1.docx"'
    const filename= 'some.txt'
    const fullpath= path.join(customfolder,filename)
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill('javascript')
    const [downloadfile]=await Promise.all([page.waitForEvent('download'),
        page.getByRole('button', {name:'Download'}).click()

    ])
    console.log(fullpath);
    await downloadfile.saveAs(fullpath)
    if(fs.existsSync(fullpath))    // in file system it wil check path is exist or not
    {
        console.log("file saved to "+fullpath);

        
    }
    else {
        console.log("not saved to full path"+fullpath);
        
    }
})