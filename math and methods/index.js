// Math is an intrinsic object that provides basic mathematics functionality and constants

// Declare variables for x, y, z, maximum, and minimum
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

// Round the value of x to the nearest integer
x = Math.round(x);

// Round down the value of x to the nearest integer
x = Math.floor(x);

// Round up the value of x to the nearest integer
x = Math.ceil(x);

// Calculate x^2 (x raised to the power of 2)
x = Math.pow(x, 2);

// Calculate the square root of x
x = Math.sqrt(x);

// Calculate the absolute value of x (converts negative values to positive)
x = Math.abs(x);

// Find the maximum value among x, y, and z
maximum = Math.max(x, y, z);

// Find the minimum value among x, y, and z
minimum = Math.min(x, y, z);

// Set x to the value of the mathematical constant PI
x = Math.PI;

// Display the final value of x (which is PI) in the console
console.log(x);
