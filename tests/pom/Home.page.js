export class HomePage {
   /**
     * @param {import('playwright').Page} page
     */
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchBtn = page.locator('#nav-search-submit-button');
    this.firstProduct = page.locator('span.a-text-normal').first();
  }

  async searchProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchBtn.click();
  }

  async selectFirstProduct() {
    await this.firstProduct.click();
  }
}