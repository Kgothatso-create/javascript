// inheritance = a child class can inherit all the methods and properties from another class

// Define a base class 'Animal'
class Animal {

    // Define a property 'alive' with an initial value of 'true' for all instances of 'Animal'
    alive = true;

    // Define a method 'eat' for the 'Animal' class
    eat() {
        console.log(`This ${this.name} is eating`);
    }

    // Define a method 'sleep' for the 'Animal' class
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

// Define a child class 'Rabbit' that extends 'Animal'
class Rabbit extends Animal {

    // Define a property 'name' specific to 'Rabbit'
    name = "rabbit";

    // Define a method 'run' specific to 'Rabbit'
    run() {
        console.log(`This ${this.name} is running`);
    }
}

// Define a child class 'Fish' that extends 'Animal'
class Fish extends Animal {

    // Define a property 'name' specific to 'Fish'
    name = "fish";

    // Define a method 'swim' specific to 'Fish'
    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

// Define a child class 'Hawk' that extends 'Animal'
class Hawk extends Animal {

    // Define a property 'name' specific to 'Hawk'
    name = "hawk";

    // Define a method 'fly' specific to 'Hawk'
    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

// Create instances (objects) of the classes
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// Access and display properties and methods for the 'rabbit' object
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
