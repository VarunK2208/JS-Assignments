//function binds together within lexical env is closure

function z () {         //z is the parent function 
    var b = 172;
    function x(){        //x is binded inside the z
        var a = 221;
        function y() {    //y is binded inside x and then z
            console.log(a,b);
        }
        y();
    }
    x();   //it is all binded inside a lexical environment 
}
z();

//after alocating the memory the variables can access from there parent function 
//this is the property of closure 
// helps in encapulastion 

 