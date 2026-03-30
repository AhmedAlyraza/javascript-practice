let studentMarks = [];

function addMarks() {
    let marksInput = document.querySelector("#marksInput");
    let marksValue = marksInput.value;

    // Convert to number
    let numberValue = Number(marksValue);

    // Correct validation
    if (
        marksValue === "" || 
        isNaN(numberValue) || 
        numberValue < 0 || 
        numberValue > 100
    ) {
        alert("Please enter valid marks between 0 and 100");
        return;
    }

    studentMarks.push(numberValue);
    updateStudentMarks();
    console.log(studentMarks);

    marksInput.value = "";
}

function updateStudentMarks() {
    let tableBody = document.querySelector("#marksBody");
    tableBody.innerHTML = "";

    let index = 1;

    for (let marks of studentMarks) {
        let row = document.createElement("tr");

        let cell1 = document.createElement("td");
        cell1.textContent = index++;

        let cell2 = document.createElement("td");
        cell2.textContent = marks;

        row.appendChild(cell1);
        row.appendChild(cell2);

        tableBody.appendChild(row);
    }
}

function calculateAverage() {
    if (studentMarks.length === 0) {
        document.getElementById("totalCell").textContent = 0;
        document.getElementById("averageCell").textContent = 0;
        return;
    }

    let totalMarks = 0;

    for (let marks of studentMarks) {
        totalMarks += marks;
    }

    let average = totalMarks / studentMarks.length;

    document.getElementById("totalCell").textContent = totalMarks;
    document.getElementById("averageCell").textContent = average.toFixed(2);
}