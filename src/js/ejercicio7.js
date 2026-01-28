document.addEventListener("DOMContentLoaded", () => {
  const lengthInput = document.getElementById("lengthInput");
  const generateBtn = document.getElementById("generateBtn");
  const output = document.getElementById("password");

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  generateBtn.onclick = () => {
    const length = Number(lengthInput.value);
    if (length < 4) {
      output.textContent = "Longitud mínima: 4";
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    output.textContent = pass;
  };
});
