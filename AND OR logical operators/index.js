// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

// Declare a variable to represent the temperature and another for sunny weather
let temp = 15;
let sunny = false;

// Use the logical AND operator (&&) to check multiple conditions:
// 1. Temperature is greater than 0
// 2. Temperature is less than 30
// 3. It is sunny (sunny is true)
// All conditions must be true for the message to be displayed
if (temp > 0 && temp < 30 && sunny) {
    console.log('The weather is good!');
} else {
    console.log('The weather is bad!');
}
