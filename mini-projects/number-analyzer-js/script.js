function analyzeNumber() {

    let num = Number(document.getElementById("numberInput").value);
    let resultBox = document.getElementById("resultBox");

    if (isNaN(num)) {
        resultBox.innerHTML = "⚠ Please enter a valid number.";
        return;
    }

    let result = "";

    if (num % 2 === 0) {
        result += "✔ Even Number<br>";
    } else {
        result += "✔ Odd Number<br>";
    }

    if (num > 0) {
        result += "✔ Positive Number<br>";
    } else if (num < 0) {
        result += "✔ Negative Number<br>";
    } else {
        result += "✔ Zero<br>";
    }

    if (num > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result += "✔ Prime Number<br>";
        } else {
            result += "✔ Composite Number<br>";
        }
    } else {
        result += "✔ Not Prime Number<br>";
    }

    resultBox.innerHTML = result;
}