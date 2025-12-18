const { test, expect } = require('@playwright/test');

let webcontext;

test('Login UI', async ({ browser }) => {   // Anonymous function with fat arrows

    //chrome - plugins / cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const username = page.locator('#userEmail');
    const passowrd = page.locator("#userPassword");
    const cardTitles = page.locator("[value='Login']")
    await username.fill("harshbhaksaar18@gmail.com");
    await passowrd.fill("Iversion10@");
    await cardTitles.click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path : 'state.json'});  //creates a json file where you can see all the storage required for login
    webcontext = await browser.newContext({storageState:'state.json'});
    



})

test("Go to page",async ()=>{

const page = await webcontext.newPage();
await page.goto("https://rahulshettyacademy.com/client");
const products = page.locator(".card-body");
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);



})

