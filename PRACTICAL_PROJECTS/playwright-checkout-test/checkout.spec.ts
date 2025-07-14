import { test, expect } from '@playwright/test';

test('complete checkout flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.inventory_item:first-of-type button');
  await page.click('.shopping_cart_link');

  await page.click('#checkout');
  await page.fill('#first-name', 'Julieta');
  await page.fill('#last-name', 'Benitez');
  await page.fill('#postal-code', '1000');
  await page.click('#continue');

  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
});
