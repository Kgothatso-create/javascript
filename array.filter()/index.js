// array.filter() = creates a new array with all elements 
// that pass the test provided by a function

// Define an array of ages
let ages = [18, 16, 21, 17, 19, 90];

// Use the filter method to create a new array with adults (age >= 18)
let adults = ages.filter(checkAge);

// Use forEach to print each element in the 'adults' array
adults.forEach(print);

// Define a callback function that checks if an element represents an adult (age >= 18)
function checkAge(element) {
    return element >= 18;
}

// Define a callback function that prints an element to the console
function print(element) {
    console.log(element);
}
