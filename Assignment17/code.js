//higher order function
function mynum (fac) {
    return function (n) {
       return fac * n;
    };
}
const a = mynum(10);
console.log(a(10))

const numbers = [12,1,4,5,7,54,110]

//using filter
function f() {
    return numbers.filter(aj=>aj<10);
}

console.log(f());
