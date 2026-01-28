document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("colorBtn");

  if (!button) {
    console.error("❌ Botón NO encontrado");
    return;
  }

  function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  button.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
  });
});
