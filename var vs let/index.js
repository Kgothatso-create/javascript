// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// Use a for loop with 'let' to declare 'i' as a variable with block scope
for (let i = 1; i <= 3; i += 1) {
    console.log(i); // Each 'i' within the loop is a separate block-scoped variable
}

// Use a for loop with 'var' to declare 'i' as a variable with function scope
for (var i = 1; i <= 3; i += 1) {
    console.log(i); // 'i' is function-scoped and is accessible outside the loop

// However, the following line will result in an error because 'i' is not defined in this scope
// console.log(i);
}

// Attempting to access 'i' here will result in an error since 'i' is not in scope
// console.log(i);
