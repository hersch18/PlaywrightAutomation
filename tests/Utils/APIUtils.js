class APIUtils{

constructor(apicontext,loginpayload)
{
this.apicontext = apicontext;
this.loginpayload = loginpayload;

}

async gettoken(){

    const loginResponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:this.loginpayload});
    console.log(loginResponse);
    // expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    console.log(loginResponseJson);
    const token = loginResponseJson.token;
    console.log(token);
    return token;






}



async getorder(orderpayload){

    const token = await this.gettoken();
    const createorder = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
        data : orderpayload,
        headers : {
        
            'Authorization' : token,
            'content-type' : 'application/json'
        },
        });
        
        console.log(createorder);
        const createorderjson = await createorder.json();
        console.log(createorderjson);
        const orderId = await createorderjson.orders[0];
        return orderId;






}












}

module.exports = {APIUtils};