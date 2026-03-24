const $ = (id) => document.getElementById(id);

const detectType = (input) => {
  if (!input) return "empty";

  if (input === "true" || input === "false") return "boolean";

  if (!isNaN(input)) return "number";

  if (input.startsWith("[") && input.endsWith("]")) return "array";

  if (input.startsWith("{") && input.endsWith("}")) return "object";

  return "string";
};

const checkType = () => {
  const input = $("typeInput").value.trim();
  const output = $("typeOut");

  const type = detectType(input);

  if (type === "empty") {
    output.textContent = "⚠️ Please enter a value";
    output.style.color = "orange";
    return;
  }

  output.textContent = `Detected Type: ${type}`;
  output.style.color = "#22c55e";
};