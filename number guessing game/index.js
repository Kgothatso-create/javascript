// Generate a random number between 1 and 10 (inclusive)
const answer = Math.floor(Math.random() * 10 + 1);

// Initialize a variable to keep track of the number of guesses
let guesses = 0;

// Attach a click event handler to the "submitButton" element
document.getElementById("submitButton").onclick = function () {
    // Get the user's guess from the "guessField" input
    let guess = document.getElementById("guessField").value;
    
    // Increment the number of guesses
    guesses += 1;
  
    // Check if the user's guess matches the random number
    if (guess == answer) {
        alert(`${answer} is the number. It took you ${guesses} guesses`);
    } else if (guess < answer) {
        alert("Too small!"); // If the guess is smaller than the answer
    } else {
        alert("Too large!"); // If the guess is larger than the answer
    }
}
