//SHALLOW COPY AND DEEP COPY 

let a = {                      //a nested obj 
    Name: "Varun",
    Age: 21,
   
        address: { 
        location: "secundrabad",
        hobbies: ["gaming","outing"]
    }
}

let b = Object.assign({},a)  //for shallow copy we use obj.assign 

b.Age = 22;                            //making changes in the obj 
b.address.location = "Hyderabad"
b.address.hobbies.push = "Playing";


let c = structuredClone(a);   // structuredClone is the best way to do in Deep copy 

c.Name = "Chikki"                       //making changes in deep obj 
c.address.hobbies.push = "Ridiing";
c.address.location = "Bowenpally"; 

console.log(a)  //original obj 
console.log(b)  //shallow obj 
console.log(c)  //deep obj 

//key differences between both 
// shallow copy copies only top level priorities and copies on the references not the values .. whatever we do in shallow copy the same values is applied to the original value ..
// deep copy copies the entire obj with references and values.. whatever we do in deep copy does not refect in original obj .

