let a; //until the value is initilized it remain in TDZ
a = 10;  //in TDZ
console.log(a);
console.log(b); // as var is a global variable it will return undefined.
var b = 100;

// let a = 13; //throws syntax error

console.log(f) //throws reference error : as it not initialized
let f = 12;

const ac = 1500; // it doesnt throw any error as it is initilized
console.log(ac);

// The Temporal Dead Zone (TDZ) is the period between when a variable is hoisted (allocated memory) and when it is initialized with a value. During this time, trying to access the variable results in a ReferenceError.

