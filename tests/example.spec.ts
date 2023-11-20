import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www.google.com/');
  await page.locator('.SDkEP').click();
  await page.getByLabel('Buscar', { exact: true }).click();
  await page.getByLabel('Buscar', { exact: true }).fill('ducks');
  await page.locator('#slim_appbar').getByRole('link').first().click();
});