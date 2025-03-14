class Single {
    constructor(){
        if(!Single.instance) {       //creating a single instances
            this.data = "there";        
            Single.instance = this;       //storing data in instance created 
        }
        return Single.instance;
    }
    getData() {
    return this.data;
    }
}

const instance1 = new Single()
const instance2 = new Single()

console.log(instance1 === instance2)
console.log(instance1)
console.log(instance2)


//ensures that only one instance/obj is present in the class
//it returns the same instance instead of creating one