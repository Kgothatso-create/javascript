// ! NOT logical operator
// Typically used to reverse a condition's boolean value
// true -> false  false -> true

// Declare a variable to represent the temperature and another for sunny weather
let temp = 15;
let sunny = false;

// Use the NOT logical operator (!) to reverse the condition:
// If "temp > 0" is NOT true, it means the temperature is not greater than 0, so it's considered cold
if (!(temp > 0)) {
    console.log("It's cold outside");
} else {
    console.log("It's warm outside");
}

// Use the NOT logical operator (!) to reverse the condition:
// If "sunny" is NOT true, it means it's not sunny, so it's considered cloudy
if (!sunny) {
    console.log("It's cloudy outside");
} else {
    console.log("It's sunny outside");
}
