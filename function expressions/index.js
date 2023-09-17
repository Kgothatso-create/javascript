// function expression = function without a name (anonymous function)
// avoid polluting the global scope with names
// write it, then forget about it

// ------------ Example 1 ------------
// Define a function expression named 'greeting'
const greeting = function(){
    console.log("hello");
}

// Call the 'greeting' function
greeting();

// ------------ Example 2 ------------
// Initialize a counter variable
let count = 0;

// Attach a click event handler to the "increaseButton" element
document.getElementById("increaseButton").onclick = function(){
    // Increment the count variable
    count += 1;
    
    // Update the content of the "myLabel" element with the new count value
    document.getElementById("myLabel").innerHTML = count;
}

// Attach a click event handler to the "decreaseButton" element
document.getElementById("decreaseButton").onclick = function(){
    // Decrement the count variable
    count -= 1;
    
    // Update the content of the "myLabel" element with the new count value
    document.getElementById("myLabel").innerHTML = count;
}
