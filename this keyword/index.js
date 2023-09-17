// this = reference to a particular object
// the object depends on the immediate context

// Define an object named 'car1' representing a car
const car1 = {
    model: "Mustang",  // Property: Model of the car
    color: "red",     // Property: Color of the car
    year: 2023,       // Property: Year of manufacture of the car

    // Method: Drive the car and use 'this' to reference the object's properties
    drive: function () {
        console.log(`You drive the ${this.model}`);
    }
};

// Define another object named 'car2' representing a different car
const car2 = {
    model: "Corvette",  // Property: Model of the car
    color: "blue",      // Property: Color of the car
    year: 2024,         // Property: Year of manufacture of the car

    // Method: Drive the car and use 'this' to reference the object's properties
    drive: function () {
        console.log(`You drive the ${this.model}`);
    }
};

// Invoke the 'drive' method of 'car1' and 'car2'
car1.drive();
car2.drive();
