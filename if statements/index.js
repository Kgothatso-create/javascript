// if statement = a basic form of decision making
//                if a condition is true, then do something
//                if not, then don't do it!

// Declare a variable to represent a person's age
let age = 21;

// Check if the age is greater than or equal to 65
if (age >= 65) {
    console.log("You are a senior citizen!");
}
// If the previous condition is not met, check if the age is greater than or equal to 18
else if (age >= 18) {
    console.log("You are an adult!");
}
// If the age is less than 0 (negative), handle this special case
else if (age < 0) {
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
// If none of the above conditions are met, consider the person a child
else {
    console.log("You are a child!");
}

// Declare a variable to represent an online status
let online = false;

// Check if the online status is true (online)
if (online) {
    console.log("You are online!");
}
// If the online status is false (offline), execute the following code block
else {
    console.log("You are offline!");
}
