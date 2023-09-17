// Initialize a count variable to 0
let count = 0;

// Add a click event listener to the "Decrease" button
document.getElementById("decreaseBtn").onclick = function(){
    // Decrement the count by 1
    count -= 1;
    
    // Update the content of the "countLabel" element with the new count
    document.getElementById("countLabel").innerHTML = count;
}

// Add a click event listener to the "Reset" button
document.getElementById("resetBtn").onclick = function(){
    // Reset the count to 0
    count = 0;
    
    // Update the content of the "countLabel" element to display the reset count
    document.getElementById("countLabel").innerHTML = count;
}

// Add a click event listener to the "Increase" button
document.getElementById("increaseBtn").onclick = function(){
    // Increment the count by 1
    count += 1;
    
    // Update the content of the "countLabel" element with the new count
    document.getElementById("countLabel").innerHTML = count;
}
