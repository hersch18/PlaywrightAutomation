const { test, expect } = require('@playwright/test');

test('First Playwright test', async ({ browser }) => {   // Anonymous function with fat arrows

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
    //await page.waitForLoadState('networkidle');       // this method waits for all the API to load and then executes the next code.
    await cardTitles.first().waitFor();                      // This waits for the first title until it is visible
    const allcardtitles = await cardTitles.allTextContents();       // This returns all the items on the UI //Texcontents doesn't support autowait thats why we used waitfor for until page loads and that element is visible.
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

test('static dropdowns', async ({ page }) => {   // Anonymous function  //This test case handles dropdown

    // //chrome - plugins / cookies
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const documentlink = page.locator("[href*='documents-request']");
    const dropdown = page.locator('select.form-control');    
    await dropdown.selectOption('consult');    // dropdown is selected through selectoption in playwright
    

    //selecting Radio buttons
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await expect(page.locator('.radiotextsty').last()).toBeChecked();


    //handling checkboxes 
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect( await page.locator('#terms').isChecked()).toBeFalsy(); // await is used inside because the action is performed inside for checkin the checkbox
    await expect(documentlink).toHaveAttribute("class","blinkingText"); // to check the blinking text
    await page.pause();     // Used for Debugging
});