// functions
function greet(name) {
  return "Hello " + name;
}

function toUpper(name) {
  return name.toUpperCase();
}

function getLength(name) {
  return "Length: " + name.length;
}

// controller
function runFunction(type) {
  const name = document.getElementById("funcName").value.trim();
  const output = document.getElementById("funcOut");

  // validation
  if (!name) {
    output.innerText = "⚠️ Please enter a name";
    output.style.color = "orange";
    return;
  }

  let result;

  switch (type) {
    case "greet":
      result = greet(name);
      break;

    case "upper":
      result = toUpper(name);
      break;

    case "length":
      result = getLength(name);
      break;
  }

  output.innerText = result;
  output.style.color = "#22c55e";
}