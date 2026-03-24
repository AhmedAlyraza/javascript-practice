function getArray() {
  const input = document.getElementById("arrInput").value.trim();

  if (!input) return [];

  // split + clean + remove empty items
  return input
    .split(",")
    .map(item => item.trim())
    .filter(item => item !== "");
}

function handleArray(type) {
  const output = document.getElementById("arrOut");
  const arr = getArray();

  // validation
  if (arr.length === 0) {
    output.innerText = "⚠️ Please enter valid items";
    output.style.color = "orange";
    return;
  }

  let result;

  switch (type) {
    case "show":
      result = arr.join(" | ");
      break;

    case "count":
      result = `Total items: ${arr.length}`;
      break;

    case "sort":
      // numeric + string sort fix
      result = arr
        .slice()
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .join(" | ");
      break;

    case "reverse":
      result = arr.slice().reverse().join(" | ");
      break;

    default:
      result = "Unknown operation";
  }

  output.innerText = result;
  output.style.color = "#22c55e";
}