//constructor function 

function Student (name,marks) {     //creating a function with two parameters name and marks
    this.name = name;  // constructor 
    this.marks = marks;

    this.score = function () {                     //method 
        console.log(`${this.name} scored ${this.marks}`) 
    }; 

}
//creating instances 
let Student1 = new Student("Varun",30)
let Student2 = new Student("VK",22)

Student1.score();
Student2.score();

console.log(Student1.score === Student2.score) //it returs false as it doesnt share the properties

//using prototype 

function Employee (name,sal) {
    this.name = name;
    this.sal = sal;

    Employee.prototype.about = function () {   //using prototype function 
        console.log(`${this.name} gets ${this.sal}`)
    };
}

let emp1 = new Employee("AKASH",100000)
let emp2 = new Employee("SURIYA",10)

emp1.about();
emp2.about();

console.log(emp1.about === emp2.about) //returns true as it shares the same properties

//if we use prototype based function it uses less memory and data encapulastion is done