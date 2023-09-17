// nested loop = a loop inside of another loop

// Prompt the user to enter a symbol, number of rows, and number of columns
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

// Outer loop: Iterates over the rows
for (let i = 1; i <= rows; i += 1) {
    // Inner loop: Iterates over the columns for each row
    for (let j = 1; j <= columns; j += 1) {
        // Add the specified symbol to the "myRectangle" element's content
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    // Add a line break ("<br>") after each row to create a rectangular pattern
    document.getElementById("myRectangle").innerHTML += "<br>";
}
