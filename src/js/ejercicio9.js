document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addTaskBtn");
  const list = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const save = () => localStorage.setItem("tasks", JSON.stringify(tasks));

  const render = () => {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      const del = document.createElement("button");
      del.textContent = "X";
      del.onclick = () => {
        tasks.splice(index, 1);
        save();
        render();
      };

      li.appendChild(del);
      list.appendChild(li);
    });
  };

  addBtn.onclick = () => {
    if (!input.value.trim()) return;
    tasks.push(input.value);
    input.value = "";
    save();
    render();
  };

  render();
});
