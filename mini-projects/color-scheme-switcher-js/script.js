const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const mainHeading = document.getElementById('m-heading');

buttons.forEach(function (button) {
    button.addEventListener("mouseover", function() {
        button.style.cursor = "pointer"; // Set cursor on the individual button
    });

    button.addEventListener('click', function(e){
        let color;
        let textColor;

        switch(e.target.id) {
            case 'white':
                color = "#ffffff"; // White background
                textColor = "blue";
                break;
            case 'grey':
                color = "#808080"; // Grey background
                textColor = "white";
                break;
            case 'yellow':
                color = "#ffff00"; // Yellow background
                textColor = "grey";
                break;
            case 'blue':
                color = "#0000ff"; // Blue background
                textColor = "white";
                break;
            default:
                color = "#ffffff"; // Default to white background
                textColor = "black"; // Default text color
        }

        body.style.backgroundColor = color;
        mainHeading.style.color = textColor;
    });
});