document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("countBtn");
  const counter = document.getElementById("counter");

  if (!button || !counter) {
    console.error("❌ Elementos no encontrados en el DOM");
    return;
  }

  let count = 0;

  button.addEventListener("click", () => {
    count++;
    counter.textContent = `Clics: ${count}`;
  });
});
