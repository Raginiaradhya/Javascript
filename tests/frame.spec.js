import{test,expect} from '@playwright/test'
test.skip('handling frames',async({page})=>{
 await page.goto('https://ui.vision/demo/webtest/frames/')
 //get total frames
const f= page.frames()
console.log(f.length)
const f1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
await f1.locator('//input[@name="mytext1"]').fill("Welcome to frame1")
//page.waitForTimeout(1000)
const f2=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"})
await f2.locator('//input[@name="mytext2"]').fill("Welcome to frame2")
const f4=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_4.html"})
await f4.locator('//input[@name="mytext4"]').fill("Welcome to frame4")
//page.waitForTimeout(1000)
// const f3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
// await f3.locator('//input[@name="mytext3"]').fill("Welcome to frame3")
let f3=await page.frameLocator('//frame[@src="frame_3.html"]').locator('//input[@name="mytext3"]')
await f3.fill("Welcome to frame3")
  

// const f3=await page.locator('//frame[@src="frame_3.html"]').contentFrame()
// await f3.locator('//input[@name="mytext3"]').fill("Welcome to frame3")


const innerframe=await f3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]');
await innerframe.locator('//div[@data-value="I am a human"]').check()
await page.waitForTimeout(3000)



}
)
test.skip('handling frames in demoapp',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/frames')
    const f= await page.frameLocator('iframe[class*="w-full h"]') //* represent  partial matching
    await f.locator('//input[@name="username"]').fill("admin")
    await page.waitForTimeout(2000)
    await f.locator('//input[@name="password"]').fill("manager")


})
test.only('Nested iframe',async({page})=>
{
    await page.goto('https://demoapps.qspiders.com/ui/frames')
    const f=await page.frameLocator('iframe[class*="w-full h"]')
    const adm=await f.getByText("Admin@gmail.com").textContent()
    console.log(adm);
    
})

