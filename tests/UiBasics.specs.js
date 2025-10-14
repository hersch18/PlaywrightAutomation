const { test, expect } = require('@playwright/test');

test.only('First Playwright test', async ({ browser }) => {   // Anonymous function with fat arrows

    //chrome - plugins / cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.locator('#username').fill("Harsh");  // Type is deprecated so we are not using it
    await page.locator("[type = 'password']").fill("Learning");
    await page.locator("#signInBtn").click();



});

test('Page Playwright test', async ({ page }) => {   // Anonymous function

    // //chrome - plugins / cookies
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
});