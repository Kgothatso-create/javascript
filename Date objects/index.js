// The Date object is used to work with dates and times.

// Create a new Date object representing the current date and time.
let date = new Date();

// You can also create a Date object by specifying the number of milliseconds since
// January 1, 1970 (Unix epoch) or using various other constructors. Examples:
// let date = new Date(0); // January 1, 1970, 00:00:00 UTC
// let date = new Date(2023, 0, 1, 2, 3, 4, 5); // January 1, 2023, 02:03:04.005
// let date = new Date("January 1, 2023 00:00:00"); // January 1, 2023, 00:00:00

// Access various components of the date and time:
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
let month = date.getMonth(); // 0 (January) to 11 (December)
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();

// You can also set individual components of the date and time as follows:
// date.setFullYear(2024);
// date.setMonth(11); // December (0-based)
// date.setDate(31);
// date.setHours(23);
// date.setMinutes(1);
// date.setSeconds(30);
// date.setMilliseconds(0);

// Convert the date object to a formatted string using 'toLocaleString()'.
date = date.toLocaleString();

// Display the formatted date in an HTML element with the id 'myLabel'.
document.getElementById("myLabel").innerHTML = date;

// You can create custom formatting functions for dates and times.
function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // Adding 1 to make it 1-based.
    let day = date.getDate();

    return `${month}/${day}/${year}`;
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    // Convert hours to 12-hour format.
    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}
