//function binds together within lexical env is closure

function z () {
    var b = 172;
    function x(){
        var a = 221;
        function y() {
            console.log(a,b);
        }
        y();
    }
    x();
}
z();

 