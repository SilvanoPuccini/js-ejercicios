document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const items = document.querySelectorAll("#searchList li");

  if (!input || items.length === 0) {
    console.error("❌ Elementos no encontrados");
    return;
  }

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();

    items.forEach((item) => {
      item.style.display = item.textContent.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
  });
});
