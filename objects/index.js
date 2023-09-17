// object = A group of properties and methods
// properties = what an object has
// methods = what an object can do
// use . to access properties/methods

// Define an object named 'car1' representing a car
const car1 = {
    model: "Mustang",  // Property: Model of the car
    color: "red",     // Property: Color of the car
    year: 2023,       // Property: Year of manufacture of the car

    // Method: Drive the car
    drive: function () {
        console.log("You drive the car");
    },
    
    // Method: Brake the car
    brake: function () {
        console.log("You step on the brakes");
    }
};

// Define another object named 'car2' representing a different car
const car2 = {
    model: "Corvette",  // Property: Model of the car
    color: "blue",      // Property: Color of the car
    year: 2024,         // Property: Year of manufacture of the car

    // Method: Drive the car
    drive: function () {
        console.log("You drive the car");
    },

    // Method: Brake the car
    brake: function () {
        console.log("You step on the brakes");
    }
};

// Access and display properties and invoke methods of 'car1'
console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.brake();

// Access and display properties and invoke methods of 'car2'
console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();
car2.brake();
