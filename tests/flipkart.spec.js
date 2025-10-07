import {test,expect} from '@playwright/test'
import data from '../testdata/flipdata.json'
import { Flogin } from './pom/FLpage.page'
import { FHomePage } from './pom/FHpage.page'
import { Tpage } from './pom/travelpage.page'
test('flipkart', async({page})=>
{
    await page.goto(data.url)
   let fpage =new Flogin(page)
   await fpage.srcdetail()
   let hpage=new FHomePage(page)
   await hpage.fdetail(data.frmm,data.tloc)
   await page.waitForTimeout(2000)
   let tpage=new Tpage(page)
   await tpage.traveldetail()
   await page.waitForTimeout(2000)
})