//set timeout

function x() {
    for (let i =1;i<=5;i++) {
        setTimeout(function (){
            console.log(i)
        },i * 500);
    }
}
x();

//first function
function MYnumProd(n,m) {
    prod = n * m;
    return prod
}

var x = 12;
var y = 2;

console.log(MYnumProd(x,y))

//Anonymous Function

const sub = function(a,b) {
    res = b - a;
    return res;
}
console.log(sub(5,10))