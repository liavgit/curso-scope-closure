import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {

  await page.goto('http://uitestingplayground.com/textinput');

  // verify input is visible
  await expect(page.locator('#newButtonName')).toBeVisible();
  // select input and fill with a text
  await page.locator('#newButtonName').fill('hola');
  await page.pause();
  // click button
  await page.locator('#updatingButton').click();
  // verify button text updated
  await expect(page.locator('#updatingButton')).toContainText('hola');

});