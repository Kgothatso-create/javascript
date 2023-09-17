// Define an array of grades
let grades = [100, 50, 90, 60, 80, 70];

// Use the sort method to sort the grades in descending order using the descendingSort callback function
grades = grades.sort(descendingSort);

// Use forEach to print each sorted grade
grades.forEach(print);

// Define a callback function for descending sort
function descendingSort(x, y) {
    // Compare function: subtracting 'y' from 'x' sorts in descending order
    return y - x;
}

// Define a callback function for ascending sort
function ascendingSort(x, y) {
    // Compare function: subtracting 'x' from 'y' sorts in ascending order
    return x - y;
}

// Define a callback function that prints an element to the console
function print(element) {
    console.log(element);
}
