// script.js
let theme = "default";

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item";
    taskItem.textContent = taskInput.value;

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function changeTheme() {
  const themeSelect = document.getElementById("themeSelect");
  const body = document.body;

  theme = themeSelect.value;

  body.classList.remove("default-theme", "dark-theme", "light-theme");
  body.classList.add(`${theme}-theme`);
}
