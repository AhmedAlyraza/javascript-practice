const BASE_URL = "https://api.exchangerate-api.com/v4/latest";

const dropdowns = document.querySelectorAll("select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector("select[name='from']");
const toCurr = document.querySelector("select[name='to']");
const msg = document.querySelector(".msg");
const amountInput = document.querySelector(".amount input");

// Populate dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.value = currCode;
    option.innerText = currCode;

    if (select.name === "from" && currCode === "USD") {
      option.selected = true;
    }
    if (select.name === "to" && currCode === "PKR") {
      option.selected = true;
    }

    select.append(option);
  }

  select.addEventListener("change", (e) => updateFlag(e.target));
}

// Update flags
function updateFlag(element) {
  const countryCode = countryList[element.value];
  const img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Fetch & convert
async function updateExchangeRate() {
  let amount = amountInput.value;

  if (amount === "" || amount <= 0) {
    amount = 1;
    amountInput.value = 1;
  }

  msg.innerText = "Converting...";

  try {
    const res = await fetch(`${BASE_URL}/${fromCurr.value}`);
    const data = await res.json();

    const rate = data.rates[toCurr.value];
    const finalAmount = (amount * rate).toFixed(2);

    msg.innerText = `${amount} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

  } catch (err) {
    msg.innerText = "Error fetching data";
    console.error(err);
  }
}

// Swap currencies
document.querySelector(".dropdown i").addEventListener("click", () => {
  let temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;

  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});

// Button click
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// Load
window.addEventListener("load", () => {
  updateExchangeRate();
});