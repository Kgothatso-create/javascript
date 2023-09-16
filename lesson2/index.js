// Declaring a variable 'firstname' and assigning it a string value 'kp'.
let firstname = 'kp'; // string

// Declaring a variable 'age' and assigning it a numeric value 28.
let age = 28; // number

// Declaring a variable 'working' and assigning it a boolean value false.
let working = false; // boolean

// Printing the value of 'firstname' to the console.
console.log(firstname);

// Printing a message along with the value of 'firstname' to the console.
console.log('my name is', firstname);

// Printing the value of 'age' to the console.
console.log(age);

// Printing a message along with the value of 'age' to the console.
console.log('i am', age, 'years old');

// Printing the value of 'working' to the console.
console.log(working);

// Printing a message along with the value of 'working' to the console.
console.log('i am working', working);

// Modifying the HTML content of an element with the id "p1" to include 'hello ' followed by the value of 'firstname'.
document.getElementById("p1").innerHTML = "hello " + firstname;

// Modifying the HTML content of an element with the id "p2" to include ' i am old ' followed by the value of 'age'.
document.getElementById("p2").innerHTML = " i am old " + age;

// Modifying the HTML content of an element with the id "p3" to include ' unispired ' followed by the value of 'working'.
document.getElementById("p3").innerHTML = " unispired " + working;
