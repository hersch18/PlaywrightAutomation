const { test, expect } = require('@playwright/test');

test.only('First Playwright test', async ({ browser }) => {   // Anonymous function with fat arrows

    //chrome - plugins / cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#username');
    const passowrd = page.locator("[type = 'password']");
    const cardTitles = page.locator(".card-body a");
    const signIn = page.locator("#signInBtn");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await username.fill("Harsh");  // Type is deprecated so we are not using it
    await passowrd.fill("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*=block]").textContent());
    await expect(page.locator("[style*=block]")).toContainText("Incorrect");
    await username.fill("");
    await username.fill("rahulshettyacademy");
    await signIn.click();
    // console.log(await cardTitles.first().textContent());
    //await page.waitForLoadState('networkidle');
    await cardTitles.first().waitFor();
    const allcardtitles = await cardTitles.allTextContents();
    console.log(allcardtitles);




});

test('Page Playwright test', async ({ page }) => {   // Anonymous function

    // //chrome - plugins / cookies
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
});