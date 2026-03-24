let count = 0;
let totalObtained = 0;
let totalMarks = 0;

function addResult() {

    let subject = document.getElementById("subject").value;
    let obtained = Number(document.getElementById("obtained").value);
    let total = Number(document.getElementById("total").value);

    if (!subject || !obtained || !total) {
        alert("Please fill all fields");
        return;
    }

    if (total === 0) {
        alert("Total marks cannot be zero");
        return;
    }

    count++;

    let percentage = ((obtained / total) * 100).toFixed(2);
    let grade = calculateGrade(percentage);

    totalObtained += obtained;
    totalMarks += total;

    let tbody = document.getElementById("resultBody");

    tbody.innerHTML += `
        <tr>
            <td>${count}</td>
            <td>${subject}</td>
            <td>${obtained}</td>
            <td>${total}</td>
            <td>${percentage}%</td>
            <td>${grade}</td>
        </tr>
    `;

    updateGrandTotal();
    clearFields();
}

function calculateGrade(percent) {
    if (percent >= 90) return "A+";
    if (percent >= 80) return "A";
    if (percent >= 70) return "B";
    if (percent >= 60) return "C";
    if (percent >= 50) return "D";
    return "F";
}

function updateGrandTotal() {
    let grandPercentage = ((totalObtained / totalMarks) * 100).toFixed(2);
    let grandGrade = calculateGrade(grandPercentage);

    document.getElementById("grandObtained").innerText = totalObtained;
    document.getElementById("grandTotal").innerText = totalMarks;
    document.getElementById("grandPercentage").innerText = grandPercentage + "%";
    document.getElementById("grandGrade").innerText = grandGrade;
}

function clearFields() {
    document.getElementById("subject").value = "";
    document.getElementById("obtained").value = "";
    document.getElementById("total").value = "";
}