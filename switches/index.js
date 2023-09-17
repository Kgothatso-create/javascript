// switch = statement that examines a value 
//          for a match against many case clauses.
//          More efficient than many "else if" statements

// Declare a variable to represent a letter grade
let grade = "A";

// Use a switch statement to evaluate the grade variable
switch (grade) {
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed ... barely");
        break;
    case "F":
        console.log("YOU FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade");
}

// Declare a variable to represent a numeric grade
let numericGrade = 95;

// Use a switch statement with conditions based on true/false evaluations
switch (true) {
    case numericGrade >= 90:
        console.log("You did great!");
        break;
    case numericGrade >= 80:
        console.log("You did good!");
        break;
    case numericGrade >= 70:
        console.log("You did okay!");
        break;
    case numericGrade >= 60:
        console.log("You passed ... barely");
        break;
    case numericGrade > 60:
        console.log("You FAILED!");
        break;
    default:
        console.log(numericGrade, "is not a letter grade!");
}
