const list = document.getElementById("lists");
const button = document.getElementById("btn");
let count = 1;

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`; 
    list.appendChild(li);
});

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        alert(`You clicked: ${event.target.textContent}`); 
    }
});
