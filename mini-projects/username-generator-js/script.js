function generateName() {
    let fullName = document.querySelector("#fullname").value.trim();

    let removeSpace = fullName.toLowerCase().replace(/\s+/g, "");
    let length = removeSpace.length;
    let userName = removeSpace + length;

    let resultElement = document.querySelector("#result");
    let userNameCopy = document.querySelector("#userNameCopy");

    resultElement.innerHTML = `<span style="opacity:0.6;">@</span>${userName}`;

    // Click to copy
    userNameCopy.onclick = function () {
        navigator.clipboard.writeText(userName);
        userNameCopy.innerText = "Copied ✓";
        userNameCopy.classList.add("copied");

        setTimeout(() => {
            userNameCopy.innerText = "Copy";
            userNameCopy.classList.remove("copied");
        }, 1500);
    }
}