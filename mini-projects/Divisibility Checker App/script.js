// enter a number that multiple for 7

/* 
let num = prompt("Enter your Number");
if( num % 7 == 0){
    console.log(num + "is a multiple of 7.");
}else {
    console.log(num +"is NOT a multiple of 7.");
}
*/


/*
function checkMultiple() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);


    let output = document.getElementsByClassName("output")[0];

    if (num2 === 0) {
        output.innerText = "Divisor cannot be zero!";
        return;
    }
    if (num1 % num2 === 0) {
        output.innerText = `${num1} is a multiple of ${num2}`;
    } else {
        output.innerText = `${num1} is NOT a multiple of ${num2}`;
    }
}
*/

function checkMultiple() {


    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let output = document.querySelector(".output");

    if (num2 === 0) {
        output.innerText = "Divisor cannot be zero!";
        return;
    }

    if (num1 % num2 === 0) {
        output.innerText = num1 + " is a multiple of " + num2;
    } else {
        output.innerText = num1 + "  " + " is NOT a multiple of " + "  " + num2;
    }
}