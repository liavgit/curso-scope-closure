import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // await page.goto('about:blank');
  await page.goto('http://uitestingplayground.com/');
  
  // buscar el elemtno que tiene este id title
  await page.locator('#title');
  // localice  o encutnre el elemtno que tiene la clase alert 
  await page.locator('.alert');
  // click a UITAP link 
  await page.locator('a.navbar-brand').click();

  // await page.getByText('Aristotle').click();
  // // await page.locator('text=Aristotle').click();
  
  // // await page.getByRole('link', { name: 'Resources' }).click();
  // usando css  y has text...
  await page.locator('a.nav-link:has-text("Resources")').click();
  // await expect(page).toHaveURL('http://uitestingplayground.com/resources');

  // //await page.getByRole('link', { name: 'Home' }).click();
  // await page.locator('a.nav-link:has-text("Home")').click();

  // // await page.getByRole('link', { name: 'Click' }).click();
  // await page.locator('a:has-text("Click")').click();

  // //await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
  // await page.locator('button:has-Text("Button That Ignores DOM Click Event")').click();
});