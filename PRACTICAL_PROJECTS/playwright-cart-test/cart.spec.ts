import { test, expect } from '@playwright/test';

test('add and remove a product in the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.inventory_item:first-of-type button');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.click('.shopping_cart_link');
  await page.click('.cart_list .cart_item button');
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});
