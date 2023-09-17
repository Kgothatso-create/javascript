// Create a Promise object that encapsulates the result of an asynchronous operation.
const promise = new Promise((resolve, reject) => {
    // Simulate a condition where a file is loaded (set to false for example).
    let fileLoaded = false;

    // Check if the file is loaded.
    if (fileLoaded) {
        // If the file is loaded, resolve the Promise with a success message.
        resolve("File loaded");
    } else {
        // If the file is not loaded, reject the Promise with an error message.
        reject("File NOT loaded");
    }
});

// Use the 'then' method to handle the resolved value and the 'catch' method to handle any errors.
promise
    .then(value => console.log(value)) // Handle the resolved value (success).
    .catch(error => console.log(error)); // Handle any errors that occur.

// Example 2 (commented out):
/*
// Create a function 'wait' that returns a Promise, which resolves after a specified time.
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

// Call the 'wait' function to create a Promise that resolves after 3000 milliseconds (3 seconds).
wait(3000)
    .then(() => console.log("Thanks for waiting!")); // Handle the resolved value (after waiting).
*/
