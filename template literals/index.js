// Template literals = delimited with (`)
//                   instead of double or single quotes
//                   allows embedded variables and expressions

// Declare variables to store user information
let userName = "Bro";
let items = 3;
let total = 75;

// Original code using string concatenation with double quotes:
// console.log("Hello", userName);
// console.log("You have", items, "items in your cart");
// console.log("Your total is $", total);

// Updated code using template literals:
console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);

// Create a multi-line text using template literals
let text = 
`Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;

// Display the multi-line text in the HTML document
document.getElementById("myLabel").innerHTML = text;
