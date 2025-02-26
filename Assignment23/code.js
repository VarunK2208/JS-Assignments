let port = {
    name: "Varun",
    age: 12,
    details(hometown) {
        console.log(this.name+" "+this.age+"from "+hometown)
    }
}
port.details(); //returning object with a method .. returns only specific method

let port2 = {
    name: "Samba",
    age: 11,
}
port.details.call(port2,"hyderbad");  //call is borrowing method 

let port3 = {
    name: "rakhi",
    age: 23,
}

port.details.apply(port3,["hyderabad"]);  //when we use apply we need to declare it like an array

 port4 = {
    name: "samantha",
    age: 30,
}

port.details.bind(port4,"chennai") //when we want to call the variable later we use bind 

console.log(port4) //it doesnt return anything so we call it later