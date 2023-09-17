// class = a blueprint for creating objects
// define what properties and methods they have
// use a constructor for unique properties

// Define a class named 'Player'
class Player {

    // Define a property 'score' with an initial value of 0 for all instances of 'Player'
    score = 0;

    // Define a method 'pause' for the 'Player' class
    pause() {
        console.log("You paused the game");
    }

    // Define a method 'exit' for the 'Player' class
    exit() {
        console.log("You exited the game");
    }
}

// Create instances (objects) of the 'Player' class
const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

// Modify the 'score' property of 'player1'
player1.score += 1;

// Access and display the 'score' property of 'player1' and 'player2'
console.log(player1.score);
console.log(player2.score);

// Invoke the 'pause' method of 'player1' and the 'exit' method of 'player2'
player1.pause();
player2.exit();
