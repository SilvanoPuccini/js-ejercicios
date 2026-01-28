document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("itemInput");
  const addBtn = document.getElementById("addItemBtn");
  const list = document.getElementById("itemList");

  const createListItem = (text) => {
    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(deleteBtn);
    list.appendChild(li);
  };

  addBtn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
      createListItem(input.value.trim());
      input.value = "";
    }
  });
});
