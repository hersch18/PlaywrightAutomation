const { test, expect,request } = require('@playwright/test');

const loginpayload = {
    userEmail: "harshbhaksaar18@gmail.com",
    userPassword: "Iversion10@"
};

test.beforeAll(async()=>
{

const apicontext = await request.newContext();
const loginResponse = apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginpayload});
expect((await loginResponse).ok()).toBeTruthy();
const loginresponsejson=(await loginResponse).json();
const token = loginresponsejson.token();
console.log(token);

    
});