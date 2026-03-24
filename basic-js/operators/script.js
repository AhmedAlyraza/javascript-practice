const calculate = (type) => {
  const a = +document.getElementById("num1").value;
  const b = +document.getElementById("num2").value;
  const output = document.getElementById("output_id");

  // input field validation
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    output.textContent = "⚠️ Please enter valid numbers";
    return;
  }

  // arthematic operations 
  const operations = {
    add: () => a + b,
    sub: () => a - b,
    mul: () => a * b,
    div: () => (b === 0 ? "❌ Cannot divide by zero" : a / b),
  };

  const result = operations[type]?.();

  output.textContent =
    typeof result === "string" ? result : `Result: ${result}`;
};
