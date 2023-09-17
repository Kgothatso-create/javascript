// array.reduce() = reduces an array to a single value

// Define an array of prices
let prices = [5, 10, 15, 20, 25, 30];

// Use the reduce method to calculate the total price using the checkOut callback function
let total = prices.reduce(checkOut);

// Display the total price with a template literal
console.log(`The total is: $${total}`);

// Define a callback function that adds an element to the total
function checkOut(total, element) {
    return total + element;
}
