// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

// Prompt the user for their age and store the input in the 'age' variable
let age = window.prompt("How old are you?");

// Log the data type of 'age' to the console
console.log(typeof age);

// Convert the 'age' variable from a string to a number and increment it by 1
age = Number(age);
age += 1;

// Log a birthday message with the updated 'age' variable
console.log("Happy Birthday! You are", age, "years old");

// Declare variables 'x', 'y', and 'z'
let x;
let y;
let z;

// Attempt to convert a non-numeric string "pizza" to a number and store it in 'x'
x = Number("pizza");

// Convert the number 3.14 to a string and store it in 'y'
y = String(3.14);

// Attempt to convert the string "pizza" to a boolean and store it in 'z'
z = Boolean("pizza");

// Log the values and data types of 'x', 'y', and 'z'
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

