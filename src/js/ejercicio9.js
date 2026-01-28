document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addTaskBtn");
  const clearBtn = document.getElementById("clearCompletedBtn");
  const list = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const renderTasks = () => {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
      if (!task.text) return;
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;

      const span = document.createElement("span");
      span.textContent = task.text;
      if (task.completed) {
        span.style.textDecoration = "line-through";
        span.style.opacity = "0.6";
      }

      checkbox.addEventListener("change", () => {
        tasks[index].completed = checkbox.checked;
        saveTasks();
        renderTasks();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      list.appendChild(li);
    });
  };

  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    tasks.push({
      text: text,
      completed: false,
    });

    input.value = "";
    saveTasks();
    renderTasks();
  });

  clearBtn.addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.completed);
    saveTasks();
    renderTasks();
  });

  renderTasks();
});
