document.addEventListener("DOMContentLoaded", () => {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const result = document.getElementById("result");

  const addBtn = document.getElementById("addBtn");
  const subBtn = document.getElementById("subBtn");
  const mulBtn = document.getElementById("mulBtn");
  const divBtn = document.getElementById("divBtn");

  if (!num1 || !num2 || !result || !addBtn || !subBtn || !mulBtn || !divBtn) {
    console.error("❌ Algún botón o input no fue encontrado");
    return;
  }

  const calculate = (op) => {
    const a = Number(num1.value);
    const b = Number(num2.value);

    if (isNaN(a) || isNaN(b)) {
      result.textContent = "Valores inválidos";
      return;
    }

    if (op === "/" && b === 0) {
      result.textContent = "No se puede dividir por cero";
      return;
    }

    const operations = {
      "+": a + b,
      "-": a - b,
      "*": a * b,
      "/": a / b,
    };

    result.textContent = `Resultado: ${operations[op]}`;
  };

  addBtn.onclick = () => calculate("+");
  subBtn.onclick = () => calculate("-");
  mulBtn.onclick = () => calculate("*");
  divBtn.onclick = () => calculate("/");
});
