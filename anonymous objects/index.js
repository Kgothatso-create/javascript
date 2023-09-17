// Define a 'Card' class with a constructor that accepts 'value' and 'suit'.
class Card {
    constructor(value, suit) {
        this.value = value; // Initialize the card's value.
        this.suit = suit;   // Initialize the card's suit.
    }
}

// Create an array 'cards' containing instances of the 'Card' class,
// representing Ace and 2 of each suit (Hearts, Spades, Diamonds, and Clubs).
let cards = [
    new Card("A", "Hearts"),
    new Card("A", "Spades"),
    new Card("A", "Diamonds"),
    new Card("A", "Clubs"),
    new Card("2", "Hearts"),
    new Card("2", "Spades"),
    new Card("2", "Diamonds"),
    new Card("2", "Clubs")
];

// Iterate over each card in the 'cards' array and display its value and suit.
cards.forEach(card => console.log(`${card.value} ${card.suit}`));
