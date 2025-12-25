const { test, expect,request } = require('@playwright/test');
const { link } = require('fs');

test("testpop-up",async({page})=>
    {
    
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    expect(await page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    expect(await page.locator("#displayed-text")).toBeHidden();
    page.on("dialog",dialog => dialog.dismiss()); // to handle popups in playwright
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover(); // mouse hover
    const framepage = page.locator("#courses-iframe");
    await framepage.locator("a[href*='/all-access-subscription'] svg").click();

    
    
        
    });