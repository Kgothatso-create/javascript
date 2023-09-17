// constructor = a special method of a class,
// accepts arguments and assigns properties

// Define a class named 'Student'
class Student {

    // Constructor method with parameters 'name', 'age', and 'gpa'
    constructor(name, age, gpa) {
        // Assign the arguments to instance properties of the object
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    // Define a method 'study' for the 'Student' class
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Create instances (objects) of the 'Student' class with unique properties
const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

// Access and display properties and invoke the 'study' method for each student
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();
