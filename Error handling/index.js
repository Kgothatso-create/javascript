// 'try' block is used to wrap the code that might throw an error.
try {
    // Prompt the user for input and convert it to a number.
    let x = window.prompt("Enter a number");
    x = Number(x);

    // Check if 'x' is not a number, and if so, throw a custom error message.
    if (isNaN(x)) throw "That wasn't a number!";
    // Check if 'x' is an empty string, and if so, throw another custom error message.
    if (x === "") throw "That was empty!";

    // If no errors occurred, log a message indicating that 'x' is a number.
    console.log(`${x} is a number`);
} 
// 'catch' block is used to catch and handle errors thrown in the 'try' block.
catch (error) {
    console.log(error); // Log the error message.
} 
// 'finally' block always executes, regardless of whether an error occurred or not.
finally {
    console.log("This always executes");
}
