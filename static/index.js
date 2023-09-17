// static = belongs to the class, not the objects
// properties: useful for caches, fixed-configuration
// methods:    useful for utility functions

// Define a class named 'Car'
class Car {

    // Define a static property 'numberOfCars' that belongs to the class itself
    static numberOfCars = 0;

    // Constructor method with a parameter 'model'
    constructor(model) {
        this.model = model;
        // Increment the static property 'numberOfCars' each time a new car is created
        Car.numberOfCars += 1;
    }

    // Define a static method 'startRace' that belongs to the class itself
    static startRace() {
        console.log("3...2...1...GO!");
    }
}

// Create instances (objects) of the 'Car' class
const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

// Access and display the static property 'numberOfCars' of the 'Car' class
console.log(Car.numberOfCars);

// Invoke the static method 'startRace' of the 'Car' class
Car.startRace();
