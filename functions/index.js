// Function = Define code once, and use it many times.
//            To perform some code, call the function name.

// Call the startProgram function to begin the program
startProgram();

// Define the startProgram function
function startProgram() {
    // Declare variables for user name and age
    let userName = "Bro";
    let age = 21;

    // Call the happyBirthday function with the user name and age as arguments
    happyBirthday(userName, age);
}

// Define the happyBirthday function, which takes userName and age as parameters
function happyBirthday(userName, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age, "years old!");
}
