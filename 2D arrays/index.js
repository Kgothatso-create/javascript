// 2D array = An array of arrays

// Define individual arrays for different categories of groceries
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

// Create a 2D array (an array of arrays) to represent a grocery list
let groceryList = [fruits, vegetables, meats];

// Update an element in the 2D array to replace "fish" with "steak"
groceryList[2][2] = "steak";

// Use nested loops to iterate over the groceryList
for (let list of groceryList) {
    for (let food of list) {
        // Display each item in the grocery list
        console.log(food);
    }
}
