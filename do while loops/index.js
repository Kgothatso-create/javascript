// do while loop = do something,
//                then check the condition,
//                repeat if condition is true

// Declare a variable to store the user's name
let userName;

// Use a do-while loop to ensure that the user is prompted for their name at least once
// The loop first executes the code block (prompting the user for their name) and then checks the condition
do {
    // Prompt the user to enter their name and store the input in the userName variable
    userName = window.prompt("Enter your name");
} while (userName == ""); // Continue the loop if the userName is empty ("")

// Display a greeting message with the user's name
console.log("Hello", userName);
