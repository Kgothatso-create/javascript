// slice() extracts a section of a string 
// and returns it as a new string, 
// without modifying the original string

// Declare a variable to store the full name
let fullName = "Snoop Dogg";

// Declare variables to store the first name and last name
let firstName;
let lastName;

// Using slice() to extract the first name (characters from index 0 to 3) from the fullName
firstName = fullName.slice(0, 3); // "Sno"
// Using slice() to extract the last name (characters from index 4 to the end) from the fullName
lastName = fullName.slice(4); // "Dogg"

// Alternatively, you can find the space character and split the full name into first and last names

// Find the index of the space character in the fullName
const spaceIndex = fullName.indexOf(" "); // 5

// Using slice() to extract the first name (characters from the beginning to the space) from the fullName
firstName = fullName.slice(0, spaceIndex); // "Snoop"
// Using slice() to extract the last name (characters after the space) from the fullName
lastName = fullName.slice(spaceIndex + 1); // "Dogg"

// Display the extracted first and last names
console.log(firstName); // Outputs: "Snoop"
console.log(lastName); // Outputs: "Dogg"
