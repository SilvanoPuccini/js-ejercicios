document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("textInput");
  const words = document.getElementById("wordCount");
  const chars = document.getElementById("charCount");

  input.addEventListener("input", () => {
    const text = input.value.trim();
    chars.textContent = text.length;
    words.textContent = text ? text.split(/\s+/).length : 0;
  });
});
