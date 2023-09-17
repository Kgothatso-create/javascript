// Define a 'Car' class with a constructor that accepts 'model', 'year', and 'color'.
class Car {
    constructor(model, year, color) {
        this.model = model; // Initialize the car's model.
        this.year = year;   // Initialize the car's manufacturing year.
        this.color = color; // Initialize the car's color.
    }
}

// Create instances of the 'Car' class with different attributes.
const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

// Define a function 'changeColor' that changes the color of a car.
function changeColor(car, color) {
    car.color = color; // Update the 'color' property of the provided car.
}

// Define a function 'displayInfo' that displays information about a car.
function displayInfo(car) {
    console.log(car.model); // Display the car's model.
    console.log(car.year);  // Display the car's manufacturing year.
    console.log(car.color); // Display the car's color.
}

// Change the color of 'car3' to "gold" using the 'changeColor' function.
changeColor(car3, "gold");

// Display information about 'car3' using the 'displayInfo' function.
displayInfo(car3);
