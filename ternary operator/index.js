// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands:
//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False
//
// condition ? exprIfTrue : exprIfFalse

// Use the checkAge function to determine if a person is an adult and store the result in the 'adult' variable
let adult = checkAge(12);

// Display whether the person is an adult or not
console.log(adult);

// Define the checkAge function, which takes 'age' as a parameter
function checkAge(age) {
    // Use the ternary operator to check if 'age' is greater than or equal to 18
    // If true, return 'true'; otherwise, return 'false'
    return age >= 18 ? true : false;
}

// Call the checkWinner function to check if someone won a game and display the result
checkWinner(false);

// Define the checkWinner function, which takes 'win' as a parameter
function checkWinner(win) {
    // Use the ternary operator to determine the message based on the 'win' parameter
    win ? console.log("You win!") : console.log("You lose!");
}
