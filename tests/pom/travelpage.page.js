export class Tpage
{
    /**
     * @param {import('playwright').Page} page
     */

    constructor(page)
    {
        this.page=page
        this.fname=page.locator('//div[@class="PyyaoL"]|//div[@class="_44X-Hx"]')
    }
    async traveldetail()
    {
        
      let d = await this.fname.all()
      for(let ele of d)
      {
          let option=await ele.textContent()
          console.log(option);
          
      }
    }
}