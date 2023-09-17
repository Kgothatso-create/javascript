// Define an array of cards
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Call the shuffle function to shuffle the cards
shuffle(cards);

// Log the shuffled cards to the console
console.log(cards);

// Uncomment the following lines to log individual cards or use forEach to print them
// console.log(cards[0]);
// cards.forEach(card => console.log(card));

// Define a shuffle function that shuffles the elements of an array
function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        // Generate a random index within the remaining unshuffled portion
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        // Swap the current element with the randomly selected element
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    // Return the shuffled array
    return array;
}
