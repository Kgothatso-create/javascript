// array.map() = executes a provided callback function
// once for each array element
// AND creates a new array

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Use the map method to create a new array with the squares of each number
let squares = numbers.map(square);

// Use the map method to create a new array with the cubes of each number
let cubes = numbers.map(cube);

// Uncomment the following lines to print the arrays
// numbers.forEach(print);
// squares.forEach(print);
// cubes.forEach(print);

// Define a callback function that returns the square of an element
function square(element) {
    return Math.pow(element, 2);
}

// Define a callback function that returns the cube of an element
function cube(element) {
    return Math.pow(element, 3);
}

// Define a callback function that prints an element to the console
function print(element) {
    console.log(element);
}
