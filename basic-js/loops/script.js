function runLoop(type) {
  const num = Number(document.getElementById("loopInput").value);
  const output = document.getElementById("loopOut");

  // validation
  if (isNaN(num) || num <= 0) {
    output.innerText = "⚠️ Enter a valid positive number";
    output.style.color = "orange";
    return;
  }

  let result = [];

  for (let i = 1; i <= num; i++) {

    if (type === "even" && i % 2 !== 0) continue;
    if (type === "odd" && i % 2 === 0) continue;

    result.push(i);
  }

  output.innerText = result.join(" , ");
  output.style.color = "#22c55e";
}