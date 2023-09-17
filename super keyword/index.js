// super = Refers to the parent class.
// Commonly used to invoke the constructor of a parent class.

// Define a parent class 'Animal' with a constructor that accepts 'name' and 'age'.
class Animal {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Define a child class 'Rabbit' that extends 'Animal'.
class Rabbit extends Animal {

    // Define a constructor for 'Rabbit' that accepts 'name', 'age', and 'runSpeed'.
    constructor(name, age, runSpeed) {
        // Use 'super' to call the constructor of the parent class 'Animal'.
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

// Define a child class 'Fish' that extends 'Animal'.
class Fish extends Animal {

    // Define a constructor for 'Fish' that accepts 'name', 'age', and 'swimSpeed'.
    constructor(name, age, swimSpeed) {
        // Use 'super' to call the constructor of the parent class 'Animal'.
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

// Define a child class 'Hawk' that extends 'Animal'.
class Hawk extends Animal {

    // Define a constructor for 'Hawk' that accepts 'name', 'age', and 'flySpeed'.
    constructor(name, age, flySpeed) {
        // Use 'super' to call the constructor of the parent class 'Animal'.
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

// Create instances (objects) of the child classes with specific properties.
const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

// Access and display properties of the 'rabbit' object.
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
