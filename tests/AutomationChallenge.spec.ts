import { test, expect } from '@playwright/test';

test('carrito de compras tienda online', async ({ page }) => {

    // Open the browser for the page https://automationexercise.com/
    await page.goto('https://automationexercise.com/');

                // // Go down or scroll until seeing the  products
                // await page.evaluate(() => {
                //     window.scrollBy(0, 100);
                // });

    // hover of the first  product found
    await page.hover('div.col-sm-4 >> nth=0');

    // Click on "See details" for the first product    
    await page.locator('a:has-text("View Product")').first().click();
    await expect(page).toHaveURL('https://automationexercise.com/product_details/1');

    // Use the button + to add 3 products  to the cart or change the input in the field
    await page.locator('#quantity').fill('3');

    // Click on Add to cart
    await page.locator('button.cart').click();

    // Verify that the modal and the text "Added" is displayed
    await expect(page.locator('div.show')).toBeVisible();
    await expect(page.locator('div.show')).toContainText("Your product has been added to cart.");

    // Click on Continue Shopping
    await page.locator('button:has-text("Continue Shopping")').click();

    // Verify the modal is not visible anymore
    await expect(page.locator('div.modal-header')).toBeHidden();
});