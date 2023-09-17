// 'setTimeout()' is a function that schedules the execution of a given function 
// after a specified number of milliseconds. It's an asynchronous function, 
// which means it doesn't pause the execution of the code.

let item = "cryptocurrency";
let price = 420.69;

// Set up three timers to invoke different functions after specific time intervals.
let timer1 = setTimeout(firstMessage, 3000, item, price); // After 3 seconds
let timer2 = setTimeout(secondMessage, 6000); // After 6 seconds
let timer3 = setTimeout(thirdMessage, 9000); // After 9 seconds

// These are the functions that will be executed when the timers complete.
function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO ITT!`);
}

// Set up a click event handler for a button with the id "myButton".
document.getElementById("myButton").onclick = function(){
    // When the button is clicked, clear all three timers to prevent their execution.
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying <3`);
}
