// Declare variables to store the values of three dice
let x;
let y;
let z;

// Add a click event listener to the "Roll" button
document.getElementById("rollButton").onclick = function() {
    // Generate random numbers between 1 and 6 (inclusive) for each die
    // Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive)
    // We multiply it by 6 to get a random decimal between 0 (inclusive) and 6 (exclusive)
    // Then, we use Math.floor to round down to the nearest whole number, resulting in values from 0 to 5
    // Adding 1 to the result shifts the range to 1 to 6
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    // Update the content of the HTML elements to display the rolled values
    // The 'innerHTML' property is used to change the content of an HTML element
    // Here, it's used to display the values of the rolled dice on the webpage
    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}
