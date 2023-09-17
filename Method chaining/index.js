// method chaining = calling one method after another
// in one continuous line of code

// Declare a variable to store the user's name
let userName = "bro";

// Chain methods to:
// 1. Get the character at the first index (charAt(0))
// 2. Convert that character to uppercase (toUpperCase())
// 3. Remove any leading or trailing whitespace (trim())

let letter = userName.charAt(0).toUpperCase().trim();

// Display the resulting letter after method chaining
console.log(letter); // Outputs: "B"
