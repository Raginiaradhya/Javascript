import { Registerpage } from "./pom/Register.page";
import {test} from '@playwright/test'
test('register action',async({page})=>{

    const rpage=new Registerpage(page)
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await rpage.register('Lisha','lisha@gmail.com','123dfg')
    await page.waitForTimeout(2000)
}
)