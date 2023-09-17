// Map = object that holds key-value pairs of any data type

// Create a new Map called 'store' with initial key-value pairs
const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

// You can use various Map methods for operations:

// Uncomment and run the following lines to perform operations:

// Retrieve the value associated with the key "t-shirt"
// const tShirtPrice = store.get("t-shirt");

// Set a new key-value pair "hat" with a value of 40
// store.set("hat", 40);

// Delete the key-value pair with the key "hat"
// store.delete("hat");

// Check if the key "underwear" exists in the map
// const hasUnderwear = store.has("underwear");

// Get the number of key-value pairs in the map
// const mapSize = store.size;

// Use forEach to iterate over key-value pairs and print them
store.forEach((value, key) => console.log(`${key} $${value}`));
