// ********************** index.js **********************
// Import the required functions and constants from the "math_util.js" module.
// You can import specific items using named imports or import everything using "* as".
// import { PI, getCircumference, getArea } from "./math_util.js";
import * as MathUtil from "./math_util.js";

// Access and log the value of the constant PI from the imported module.
console.log(MathUtil.PI);

// Calculate the circumference of a circle with a radius of 10 using the imported function.
let circumference = MathUtil.getCircumference(10);
console.log(circumference);

// Calculate the area of a circle with a radius of 10 using the imported function.
let area = MathUtil.getArea(10);
console.log(area);

// ********************** math_util.js **********************
// Define a constant named PI with the value 3.14159 to export.
export const PI = 3.14159;

// Define a function named 'getCircumference' that takes a 'radius' as an argument and returns the circumference.
export function getCircumference(radius) {
    return 2 * PI * radius;
}

// Define a function named 'getArea' that takes a 'radius' as an argument and returns the area.
export function getArea(radius) {
    return PI * radius * radius;
}
