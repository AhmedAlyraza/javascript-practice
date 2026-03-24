const $ = (id) => document.getElementById(id);

const getAgeCategory = (age) => {
  if (age < 13) return { text: "Child 👶", color: "#38bdf8" };
  if (age < 18) return { text: "Teenager 🧑", color: "#facc15" };
  if (age < 60) return { text: "Adult 🧔", color: "#22c55e" };
  return { text: "Senior 👴", color: "#f87171" };
};

const showError = (msg) => {
  const output = $("condOut");
  output.textContent = msg;
  output.style.color = "orange";
};

const checkAge = () => {
  const age = +$("ageInput").value;
  const output = $("condOut");

  // validation
  if (!Number.isFinite(age)) return showError("⚠️ Please enter age");

  if (age < 0) {
    output.textContent = "❌ Age cannot be negative";
    output.style.color = "red";
    return;
  }

  const { text, color } = getAgeCategory(age);

  output.textContent = text;
  output.style.color = color;
};

// event listener (🔥 better than inline onclick)
$("checkBtn").addEventListener("click", checkAge);