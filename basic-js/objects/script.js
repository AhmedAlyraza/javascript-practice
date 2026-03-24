function createObject() {
  const name = document.getElementById("userName").value.trim();
  const age = Number(document.getElementById("userAge").value);
  const output = document.getElementById("objOut");

  // name validation
  if (!name) {
    output.innerText = "⚠️ Name is required";
    output.style.color = "orange";
    return;
  }

   // age validation
  if (isNaN(age) || age <= 0) {
    output.innerText = "⚠️ Enter a valid age";
    output.style.color = "orange";
    return;
  }

  // object with method (🔥 important)
  const user = {
    name: name,
    age: age,

    getInfo() {
      return `${this.name} is ${this.age} years old`;
    },

    isAdult() {
      return this.age >= 18 ? "Adult" : "Minor";
    }
  };

  // output
  output.innerText =
    `${user.getInfo()} (${user.isAdult()})`;

  output.style.color = "#22c55e";
}