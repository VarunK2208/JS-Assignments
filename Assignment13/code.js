
let x = function(e) {
    alert("HELLO1");
};

let y = function(e) {
    alert("HELLO2");
};

const btn = document.getElementById("btn");

btn.addEventListener('click', x);
btn.addEventListener('click', y);