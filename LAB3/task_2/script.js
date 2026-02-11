const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  if (input.value === "") return;


  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const text = document.createElement("span");
  const delBtn = document.createElement("span");

  checkbox.type = "checkbox";
  text.textContent = input.value;
  delBtn.textContent = "🗑";
  delBtn.className = "delete";


  checkbox.addEventListener("change", function () {
    li.classList.toggle("done");
  });


  delBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });


  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(delBtn);
  taskList.appendChild(li);


  input.value = "";
});
