// Variables are labels for data values.
// Variables are containers for storing data.
// variables like var, let, const.

// Using var, var have global Scope (Not Recommended) Older JavaScript
// {
//   var x = 2;
// }
// x CAN be used here

// Using let, let have Block Scope (Modern JavaScript) let can not be redeclared.
// like {
//   let x = 2;
//       x = 9 // can not be redeclared. This will give an error
// } 
// x CAN'T be used here

// Using const, const have Block Scope (Modern JavaScript) const cannot be Redeclared
// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

// Variables are identified with unique names called identifiers.
// like x, y, z 
// age, sum, carName.

// Creating a variable in JavaScript is called declaring a variable.
// like let x,
// const age.




// VARIABLES like let, var, const

function showVariable() {
    let name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        document.getElementById("varOut").innerText = "Please enter your name";
        return;
    }

    document.getElementById("varOut").innerText = `Hello, ${name}! 👋`;
}