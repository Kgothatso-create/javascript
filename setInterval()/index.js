// 'setInterval()' is a function that repeatedly invokes a given function 
// after a specified number of milliseconds. It's an asynchronous function 
// and doesn't pause the execution of the code.

let count = 0;

// Prompt the user to input the maximum count value.
let max = window.prompt("Count up to what #?");
max = Number(max); // Convert the user input to a number.

// Set up an interval timer to call the 'countUp' function every 1000 milliseconds (1 second).
const myTimer = setInterval(countUp, 1000);

// This function is called repeatedly by the interval timer.
function countUp(){
    count += 1;
    console.log(count);
    
    // Check if the count has reached the maximum value specified by the user.
    if(count >= max){
        // If the maximum count is reached, clear the interval timer to stop further calls.
        clearInterval(myTimer);
    }
}
