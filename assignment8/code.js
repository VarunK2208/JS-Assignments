
function a() {
 var b = 10
 c();
 function c(){

 }
}

console.log(b)
a();

//function c is defined inside the parent function a 
// in Global execution context, during memory allocation c accesses its parent function for the variables if it doesnt present in it.
// then variable is assigned and runs the code