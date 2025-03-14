//Introduction 

// createOrder(cart, function(orderId) {
//     proceedToPayment(orderId);   //callback
// });


// const promise = createOrder(cart);

// promise.then(function(orderId) {
//     proceedToPayment(orderId);  
// });

// const GITHUB_API = "https://dog.ceo/api/breeds/image/random"
// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function(data) {
//     console.log(data);
// });

// createOrder(cart)
// .then(function (orderId) {
//     return proceedToPayment(orderId);
// })
// .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
// })
// .then(function (paymentInfo) {
//     return updateWalletBalance(paymentInfo);
// })

//normal promise method 
const cart = ["shoes","pants","kurta"];

createOrder(cart)
.then(function (orderId) {
   console.log(orderId);
   return orderId;
})
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    console.log(paymentInfo)
})


.catch(function (err) {
    console.log(err.message);
});

//creating a promise 
function createOrder(cart) {
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }

    });
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve,reject) {
        resolve("Payment Successful");
    })
}

function validateCart(cart) {
    return true;
}