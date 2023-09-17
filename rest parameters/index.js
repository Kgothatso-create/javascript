// rest parameters = represents an indefinite number
// of parameters
// (packs arguments into an array)

// Declare individual variables for numbers
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

// Call the sum function with multiple arguments and log the result
console.log(sum(a, b, c, d, e));

// Define the sum function using rest parameters (...numbers)
function sum(...numbers) {
    let total = 0;

    // Iterate through the numbers in the 'numbers' array
    for (let number of numbers) {
        total += number; // Add each number to the total
    }

    return total; // Return the total sum
}
