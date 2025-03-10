const taskInput = document.getElementById("taskInput"),
      taskList = document.getElementById("taskList"),
      suggestionList = document.getElementById("suggestionList");

document.getElementById("addTaskBtn").addEventListener("click", () => {
    if (taskInput.value) addTask(taskInput.value);
    taskInput.value = "";
});

const addTask = (text) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox"> ${text} <button>Delete</button>`;
    taskList.appendChild(li);
    li.querySelector("button").addEventListener("click", () => li.remove());
    li.querySelector("input").addEventListener("change", () => li.classList.toggle("completed"));       //adding tasks and using event delegation
};

const filterTasks = (condition) => {
    [...taskList.children].forEach(task => task.style.display = condition(task) ? "flex" : "none");
};

document.getElementById("showAllBtn").addEventListener("click", () => filterTasks(() => true));
document.getElementById("showCompletedBtn").addEventListener("click", () => filterTasks(task => task.classList.contains("completed")));
document.getElementById("showPendingBtn").addEventListener("click", () => filterTasks(task => !task.classList.contains("completed")));         //filter tasks 

document.getElementById("fetchTaskBtn").addEventListener("click", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const tasks = await res.json();
    suggestionList.innerHTML = tasks.map(t => `<li>${t.title} <button onclick="addTask('${t.title}')">Add</button></li>`).join("");   //fetching api
});


