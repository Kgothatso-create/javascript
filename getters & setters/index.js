// get = binds an object property to a function when that property is accessed.
// set = binds an object property to a function when that property is assigned a value.

// Define a class 'Car' with a constructor that accepts 'power' as a parameter.
class Car {
    constructor(power) {
        // Initialize private properties '_gas' and '_power'.
        this._gas = 25; // Represents the gas level in liters.
        this._power = power; // Represents the car's power in horsepower.
    }

    // Define a getter for 'power' property.
    get power() {
        // Returns the car's power with "hp" appended to it.
        return `${this._power}hp`;
    }

    // Define a getter for 'gas' property.
    get gas() {
        // Returns the gas level in liters along with the percentage.
        return `${this._gas}L (${(this._gas / 50) * 100}%)`;
    }

    // Define a setter for 'gas' property.
    set gas(value) {
        // Ensure that the 'value' is within a valid range (0 to 50).
        if (value > 50) {
            value = 50;
        } else if (value < 0) {
            value = 0;
        }
        // Update the '_gas' property with the validated 'value'.
        this._gas = value;
    }
}

// Create an instance of the 'Car' class with a power of 400hp.
let car = new Car(400);

// Assign a gas value of 100 (using the setter).
car.gas = 100;

// Access and display the car's power and gas level (using getters).
console.log(car.power); // Outputs: "400hp"
console.log(car.gas);   // Outputs: "50L (100%)"
