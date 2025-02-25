//made a simple interest calculator using Currying function 

function SI (p) {
    return function (r) {
        return function (t) {
            return (p*r*t/100); //returning function inside a function .. we can return how many functions we want too
        }           //reduces the lines of code and can declare many arguments at once
    }
}
let p = prompt("Enter Principal amount")
let r = prompt("Enter rate of Interest")
let t = prompt("Enter time period")


document.write("Simple Interest is ",SI(p)(r)(t))

