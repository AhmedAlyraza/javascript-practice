// Get references to necessary DOM elements
let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let playerXInput = document.getElementById("player-x-name");
let playerOInput = document.getElementById("player-o-name");

let winningPattern = [
  [0, 1, 2], [0, 3, 6], [2, 5, 8], [6, 7, 8], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]
];

let xTurn = true;
let count = 0;
let playerXName = "";
let playerOName = "";

// Function to disable all buttons and show the popup
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  popupRef.classList.remove("hide");
};

// Function to enable all buttons and hide the popup
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popupRef.classList.add("hide");
  msgRef.innerHTML = ""; // Clear any previous messages
};

// Function to handle win scenario
const winFunction = (letter) => {
  disableButtons();
  let winnerName = letter === "X" ? playerXName : playerOName;
  msgRef.innerHTML = `&#x1F389; <br> ${winnerName} wins!`;
};

// Function to handle draw scenario
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F389; <br> It's a Draw!";
};

// Function to check for a winning pattern
const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];

    if (element1 !== "" && element2 !== "" && element3 !== "") {
      if (element1 === element2 && element2 === element3) {
        winFunction(element1);
      }
    }
  }
};

// Event listener for each button to handle game logic
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      element.innerText = "X";
    } else {
      xTurn = true;
      element.innerText = "O";
    }
    element.disabled = true;
    count += 1;
    if (count === 9) {
      drawFunction();
    }
    winChecker();
  });
});

// Event listener for new game button
newgameBtn.addEventListener("click", () => {
  count = 0;
  playerXName = playerXInput.value || "Player X";
  playerOName = playerOInput.value || "Player O";
  enableButtons();
});

// Event listener for restart button
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Initialize the game
window.onload = enableButtons;