import { test, expect } from '@playwright/test';
import { HomePage } from './pom/Home.page';

test('Search for a product', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('https://www.amazon.in/');
  await homePage.searchProduct('iPhone 14');

  await expect(page.locator('span.a-text-normal').first()).toBeVisible();
});