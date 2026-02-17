const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

  if (input.value.trim() === "") return;

  const li = document.createElement("li");

  const leftDiv = document.createElement("div");
  leftDiv.className = "task-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("span");
  text.textContent = input.value;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";

  checkbox.addEventListener("change", function () {
    li.classList.toggle("done");
  });

  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(text);

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  input.value = "";
});
