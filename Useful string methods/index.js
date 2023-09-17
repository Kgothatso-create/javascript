// Declare variables for the user's name and phone number
let userName = "Bro Code";
let phoneNumber = "123-456-7890";

// Get the length of the userName string (number of characters)
console.log(userName.length); // Outputs: 8

// Get the character at a specific position (0-based index) in the userName string
console.log(userName.charAt(0)); // Outputs: "B"

// Find the first occurrence of the letter "o" in the userName string
console.log(userName.indexOf("o")); // Outputs: 1

// Find the last occurrence of the letter "o" in the userName string
console.log(userName.lastIndexOf("o")); // Outputs: 5

// Remove leading and trailing whitespace from the userName string
userName = userName.trim(); // Removes extra spaces at the beginning and end

// Convert the userName string to uppercase
userName = userName.toUpperCase(); // Converts all characters to uppercase

// Convert the userName string to lowercase
userName = userName.toLowerCase(); // Converts all characters to lowercase

// Remove all hyphens from the phoneNumber string using the replaceAll method
phoneNumber = phoneNumber.replaceAll("-", ""); // Removes all hyphens

// Display the modified phoneNumber string
console.log(phoneNumber); // Outputs: "1234567890"
