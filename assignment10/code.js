//block scope
{
    var a = 10;
    let b = 12;
    const c = 22;
    console.log(a);
    console.log(b);
    console.log(c);
}
    console.log(a);
    // console.log(b); //let and const wont be executed.. throws Reference Error
    // console.log(c);

//shadowing 

var cc = 120;
{
    var cc = 10;  // 120 is shadowed by 10 and executed outside the block also
    let bv = 12;
    const cd = 22;
    console.log(cc);
    console.log(bv);
    console.log(cd);

}
console.log(cc);

const f = 35;
function x() {
    const f = 45;
    console.log(f);
}
x();
console.log(f);




