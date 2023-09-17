// nested functions = Functions inside other functions.
// Outer functions have access to inner functions.
// Inner functions are "hidden" from outside.
// Used in closures (future video topic)

// Define a user's name and inbox count
let userName = "Bro";
let userInbox = 0;

// Call the login function to display user information
login();

function login() {
    // Call inner functions to display user's name and inbox count
    displayUserName();
    displayUserInbox();

    // Define an inner function to display the user's name
    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }

    // Define an inner function to display the user's inbox count
    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);
    }
}
