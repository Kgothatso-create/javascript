// array.forEach() = executes a provided callback function
// once for each array element

// Define an array of students' names
let students = ["spongebob", "patrick", "squidward"];

// Use the forEach method to capitalize each student's name
students.forEach(capitalize);

// Use the forEach method to print each student's name
students.forEach(print);

// Define a callback function that capitalizes the first letter of an element
function capitalize(element, index, array) {
    // Modify the element in the original array to capitalize the first letter
    array[index] = element[0].toUpperCase() + element.substring(1);
}

// Define a callback function that prints an element to the console
function print(element) {
    console.log(element);
}
