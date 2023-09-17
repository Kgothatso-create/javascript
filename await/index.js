// Define an asynchronous function named 'loadFile'.
async function loadFile() {
    // Create a Promise object to simulate a file loading operation.
    const promise = new Promise((resolve, reject) => {
        // Simulate the condition where a file is loaded (set to true for example).
        let fileLoaded = true;

        // Check if the file is loaded.
        if (fileLoaded) {
            // If the file is loaded, resolve the Promise with a success message.
            resolve("File loaded");
        } else {
            // If the file is not loaded, reject the Promise with an error message.
            reject("File NOT loaded");
        }
    });

    try {
        // Use the 'await' keyword to wait for the Promise to resolve or reject.
        // When resolved, set the inner HTML of an element with id "myH1" to the resolved value.
        document.getElementById("myH1").innerHTML = await promise;
    } catch (error) {
        // If there is an error (Promise rejection), set the inner HTML to the error message.
        document.getElementById("myH1").innerHTML = error;
    }
}

// Call the 'loadFile' function to load the file asynchronously.
loadFile();
