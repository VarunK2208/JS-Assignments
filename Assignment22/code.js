class Student {        //parent class
    constructor(name,age) { //parent parameters
        this.name = name;  //constructor 
        this.age = age;
    };

    details() {   
        console.log(`name ${this.name} age ${this.age}`)  //defined method is parent class 
    }
}

class Address extends Student { //this is the inherited class from parent class student 
    constructor(name,age,place) {
        super(name,age); //super keyword is used to inherit properties from parent class 
        this.place = place;

    };
    stay () {
        console.log(`name ${this.name} stays in ${this.place}`)  //child method 
    }
}

class Colony extends Address {  //made one more child class which inherits from both address and student 
    constructor(name,age,place,colony) {
        super(name,age,place);
        this.colony=colony;
    };
    local () {
        console.log(`${this.name} residing in ${this.colony} near ${this.place}`)
    }
}
let stud1 = new Student("VK",21,"Bowenpally")  //created object with parent class 
let stud2 = new Student("SAS",21,"Bowenpally")
let stud3 = new Address("VK",21, "Bowenpally")  //created obj by calling child class 
let stud4 = new Colony("VK",21,"Bowenpally","HAL COLONY")  //created obj which calls child class i.e., Colony

stud1.details();  //calling parent class first 
stud2.details(); 
stud3.stay();    //calling child class 
stud4.local(); //calling the last child class 

//benefits of using inheritance - CODE REUSABILITY
