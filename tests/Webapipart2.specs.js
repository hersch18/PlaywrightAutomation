const { test, expect } = require('@playwright/test');

let webcontext;

test('Login UI', async ({ browser }) => {   // Anonymous function with fat arrows

    //chrome - plugins / cookies
    const productname = 'ZARA COAT 3';
    
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body");
    const username = page.locator('#userEmail');
    const passowrd = page.locator("#userPassword");
    const cardTitles = page.locator("[value='Login']")
    await username.fill("harshbhaksaar18@gmail.com");
    await passowrd.fill("Iversion10@");
    await cardTitles.click();
    await page.waitForLoadState('networkidle');
    

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for(let i=0;i<count;i++){

        if(await products.nth(i).locator('b').textContent() === productname){

            await products.nth(i).locator("text= Add To Cart").click();  
            console.log("Item added to cart");
            break;  
        }

        // await page.pause();
    }
    
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor(); // waits for the elements to be loaded before opening  the page.
   const bool =  await page.locator("h3:has-Text('ZARA COAT 3')").isVisible(); // css selecteor

   

    expect(bool).toBeTruthy();
    await page.getByText('Checkout', { exact: true }).click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay : 100});
    // await context.storageState({ path: 'state.json' });  //creates a json file where you can see all the storage required for login
    // webcontext = await browser.newContext({ storageState: 'state.json' });
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionscount =  await dropdown.locator("button").count();
    for(let i=0;i<optionscount;i++){

       let text = dropdown.locator("button").nth(i).textContent();
       if(text ===" India"){

        await dropdown.locator("button").nth(i).click();
        break;
       }

    }

  expect(page.locator(".user__name [type='text']").first()).toHaveText("harshbhaksaar18@gmail.com");
  await page.getByText('Place Order ', { exact: true }).click();



})

// test("Go to page", async () => {

//     const page = await webcontext.newPage();
//     await page.goto("https://rahulshettyacademy.com/client");
//     const products = page.locator(".card-body");

//     const titles = await page.locator(".card-body b").allTextContents();
//     console.log(titles);



// })

// test("Angularpractice", async ({page}) => {






// })
