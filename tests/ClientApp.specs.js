const { test, expect,request } = require('@playwright/test');
const {APIUtils} = require('./Utils/APIUtils');

const loginpayload = {
    userEmail: "harshbhaksaar18@gmail.com",
    userPassword: "Iversion10@"
};

const orderpayload = {orders: [{country: "British Indian Ocean Territory", productOrderedId: "68a961459320a140fe1ca57a"}]};

let token;

test("First API Testing",async()=>
{

const apicontext = await request.newContext();
console.log(APIUtils);
const apiutils = new APIUtils(apicontext,loginpayload);
const response = await apiutils.getorder(orderpayload);
console.log(response);
// const orderid = getorder(orderpayload);

//create order 


    
});

// test("First API Testing",async({page})=>{

// page.addInitScript(value =>{

//     window.localStorage.setItem('tokem',value)
// },token)


// })