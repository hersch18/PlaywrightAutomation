const { test, expect } = require('@playwright/test');

let webcontext;

test('Login UI', async ({ browser }) => {   // Anonymous function with fat arrows

    //chrome - plugins / cookies
    const productname = 'ZARA COAT 3';
    
    const context = await browser.newContext();
    const page = await context.newPage();
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    const username = page.getByPlaceholder("email@example.com");
    const passowrd = page.getByPlaceholder("enter your passsword");
    const cardTitles = page.getByRole("button",{name:"login"});
    await username.fill("harshbhaksaar18@gmail.com");
    await passowrd.fill("Iversion10@");
    await cardTitles.click();
    await page.waitForLoadState('networkidle');
    

    const titles = await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name : " Add To Cart"}).click();

    console.log(titles);
    await page.pause();

    // const count = await products.count();
    // for(let i=0;i<count;i++){

    //     if(await products.nth(i).locator('b').textContent() === productname){

    //         await products.nth(i).locator("text= Add To Cart").click();  
    //         console.log("Item added to cart");
    //         break;  
    //     }

    //     await page.pause();
    // }
    // await context.storageState({ path: 'state.json' });  //creates a json file where you can see all the storage required for login
    // webcontext = await browser.newContext({ storageState: 'state.json' });




})