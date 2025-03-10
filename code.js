function curry (x) {
    return function (y) { 
        prompt("enter the value of x",x)
        prompt("enter the value of y",y) 
        return x + y;
    }
}


setTimeout(() => {
  curry()
}, 2000);



let heading = document.getElementsByClassName("title")
let info = document.getElementById("container1")
let paragraph = document.getElementById("para")
let end = document.getElementsByTagName("h2")
let but = document.getElementById("btn"); 
let ai = document.getElementById("link")
let quote = document.getElementById("btn2")

info.style.backgroundColor = "green"

for(let i=0;i<heading.length; i++) {
    heading[i].style.color = "red"
}

for(let i = 0;i<heading.length; i++) {
    heading[i].innerHTML += "WORLD"
}

paragraph.textContent += "      (endo modaladiii pacnhaytha) "

info.innerHTML += "add your review bc "

for(let i = 1;i<end.length;i++) {
    end[i].outerHTML += "END MKC"
}

info.style.color = "white"

but.addEventListener("mouseover", () => {
    but.style.backgroundColor = "red"
    but.style.color = "white"
    but.textContent = "Odhu Bhai!"
})

but.addEventListener("click", () => { 
    alert(" YOU WILL BE CRASHED IN FEW SECONDS MANN 💀");
    console.log("Starting infinite loop... The site will become unresponsive!");    
    let count = 0;
    while (true) {
        count++;
        console.log(`💀`);
    }
});

ai.addEventListener("click", () => {
    alert("THIS WILL DIRECT TO ANOTHER PAGE");
    window.location.href = "https://chatgpt.com/";
})

quote.addEventListener("click", () => {
    getdata(); // Call the async function when the button is clicked
});

async function getdata() {
    try {
        let response = await fetch("https://dummyjson.com/quotes/random");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        let quoteDisplay = document.getElementById("quoteDisplay");
        quoteDisplay.textContent = `${data.quote} - ${data.author}`; 
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

quoteDisplay.style.color="blue"
quoteDisplay.style.backgroundColor = "yellow"
quoteDisplay.style.padding = "20px"
quoteDisplay.style.textalign = "center"




//function hoisting is calling a function before it is declared.. doesnt work with expressions and arorw function or const and let
//this refers to the object tht is executing the function


