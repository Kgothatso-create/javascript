// closure = A function with preserved and private data.
// Gives you access to an outer function’s scope,
// from an inner function.

// Attach a click event handler to the "loginButton" element and call the login function when clicked
document.getElementById("loginButton").onclick = login();

// Uncomment the following line to modify the userInbox variable
// userInbox = 420.69;

// Define a login function that returns an inner function
function login() {
    // Define variables within the login function's scope
    let userName = "Bro";
    let userInbox = 1;

    // Define an inner function named alertUser
    function alertUser() {
        // Access and alert the userName and userInbox variables from the outer function's scope
        alert(`${userName} you have ${userInbox} new messages!`);

        // Modify the userInbox variable within the inner function
        userInbox = 0;
    }

    // Return the inner function alertUser, creating a closure
    return alertUser;
}
