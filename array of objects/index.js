// Define a 'Car' class with a constructor that accepts 'model', 'year', and 'color'.
class Car {
    constructor(model, year, color) {
        this.model = model; // Initialize the car's model.
        this.year = year;   // Initialize the car's manufacturing year.
        this.color = color; // Initialize the car's color.
    }
    
    drive() {
        console.log(`You drive the ${this.model}`);
    }
}

// Create instances of the 'Car' class with different attributes.
const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");
const car4 = new Car("Ferrari", 2025, "white");

// Create an array 'cars' to store the instances of cars.
const cars = [car1, car2, car3, car4];

// Access and display the 'model' property of the first three cars in the 'cars' array.
console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

// Define a function 'startRace' that drives each car in the provided 'cars' array.
function startRace(cars) {
    for (const car of cars) {
        car.drive();
    }
}

// Start the race by calling the 'startRace' function with the 'cars' array.
startRace(cars);
