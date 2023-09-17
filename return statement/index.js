// return = returns a value back to the place 
//          where you invoked a function

// Declare variables to store area, width, and height
let area;
let width;
let height;

// Prompt the user to enter width and height values
width = window.prompt("Enter width");
height = window.prompt("Enter height");

// Call the getArea function with width and height as arguments,
// and store the returned result in the 'area' variable
area = getArea(width, height);

// Display the calculated area
console.log("The area is:", area);

// Define the getArea function, which takes 'width' and 'height' as parameters
function getArea(width, height) {
    // Calculate the area by multiplying width and height, then return the result
    return width * height;
}
