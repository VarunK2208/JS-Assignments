 var a = 10;
 console.log(window.a)
console.log(this.a)

//window is global object created with Global Execution context and this is variable which points to the window
// in this window points to variable a and this also points to that

//inside object

const person = {
    name: "Alice",
    greet: function() {
        console.log(this.name); // Refers to the person object
    }
};
person.greet(); // Alice

//inside function this is not global object but person object
function Person(name) {
    this.name = name;
}

const p = new Person("Charlie");
console.log(p.name); // Charlie

//inside class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound");
    }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound
