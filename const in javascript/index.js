// const = a variable that can't be changed

// Define a constant named PI with a value of 3.14159
const PI = 3.14159;

// Declare variables for radius and circumference
let radius;
let circumference;

// Prompt the user to enter the radius of a circle and store it in the radius variable
radius = window.prompt("Enter the radius of a circle");

// Convert the user input (which is initially a string) to a number
radius = Number(radius);

// Attempting to change the value of a constant (PI) will result in an error and is commented out
// PI = 420.69;

// Calculate the circumference using the formula: 2 * PI * radius
circumference = 2 * PI * radius;

// Display the calculated circumference in the console
console.log("The circumference is:", circumference);
