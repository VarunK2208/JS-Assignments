//Asynchronous 

console.log("Start")
setTimeout(function c() {
    console.log("CA");
}, 2000);

fetch("https://goweather.herokuapp.com/weather/newyork") //pulling data from API
.then(function cd() {
console.log("FETCHING")
})

console.log("End")

//microtask queue is present when fetch api is used and callback queue is present for settimeout
//microtask --> HIGH_PRIORITY