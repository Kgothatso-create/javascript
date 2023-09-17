// arrow function expression = compact alternative to a traditional function expression
// =>

// Define an array of grades
const grades = [100, 50, 90, 60, 80, 70];

// Sort the grades in descending order using an arrow function
grades.sort((x, y) => y - x);

// Use forEach to print each sorted grade using an arrow function
grades.forEach((element) => console.log(element));
