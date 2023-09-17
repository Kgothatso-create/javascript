// Declare variables for side lengths
let a;
let b;
let c;

// Add a click event listener to the "Calculate" button
document.getElementById("submitButton").onclick = function() {
    // Get the values of side A and side B from input fields
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    // Calculate the length of side C using the Pythagorean theorem
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    // Display the result on the webpage
    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}
