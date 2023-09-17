// while loop = repeat some code 
//              while some condition is true
//              potentially infinite

// Declare a variable to store the user's name and initialize it with an empty string
let userName = "";

// Use a while loop to repeatedly prompt the user for their name until a non-empty and non-null name is provided
while (userName == "" || userName == null) {
    // Prompt the user to enter their name and store the input in the userName variable
    userName = window.prompt("Enter your name");
}

// Display a greeting message with the user's name
console.log("Hello", userName);
