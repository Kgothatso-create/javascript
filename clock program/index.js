// Get a reference to the HTML element with the id 'myLabel'.
const myLabel = document.getElementById("myLabel");

// Call the 'update' function immediately and then every 1000 milliseconds (1 second).
setInterval(update, 1000);

// Define the 'update' function.
function update() {
    // Create a new Date object representing the current date and time.
    let date = new Date();

    // Set the inner HTML of the 'myLabel' element to the formatted time string.
    myLabel.innerHTML = formatTime(date);

    // Define a nested function 'formatTime' to format the time components.
    function formatTime(date) {
        // Extract hours, minutes, and seconds from the Date object.
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        // Determine whether it's AM or PM based on hours.
        let amOrPm = hours >= 12 ? "pm" : "am";

        // Convert hours to 12-hour format.
        hours = (hours % 12) || 12;

        // Format each time component to have leading zeros if needed.
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        // Construct the formatted time string.
        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }

    // Define a nested function 'formatZeroes' to add leading zeros if needed.
    function formatZeroes(time) {
        // Convert the time component to a string.
        time = time.toString();
        
        // Add a leading zero if the length is less than 2.
        return time.length < 2 ? "0" + time : time;
    }
}
