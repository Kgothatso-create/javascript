// callback = a function passed as an argument
// to another function.
// Ensures that a function is not going
// to run before a task is completed.
// Helps us develop asynchronous code.
// (When one function has to wait for another function)
// that helps us avoid errors and potential problems.
// Example: Wait for a file to load.

// Call the sum function with two numbers and a callback function
sum(2, 3, displayConsole);

// Define the sum function that takes two numbers and a callback function
function sum(x, y, callBack) {
    let result = x + y;
    // Call the callback function with the result as an argument
    callBack(result);
}

// Define a callback function that displays the result in the console
function displayConsole(output) {
    console.log(output);
}

// Define a callback function that displays the result in the DOM (HTML)
function displayDOM(output) {
    // Set the content of an HTML element with the "myLabel" ID to the output
    document.getElementById("myLabel").innerHTML = output;
}
