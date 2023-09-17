// Get the HTML element with the ID "myDiv" and store it in the 'myDiv' variable.
const myDiv = document.getElementById("myDiv");

// Add a keydown event listener to the window object.
window.addEventListener("keydown", move);

// Initialize variables 'x' and 'y' to track the position of 'myDiv'.
let x = 0;
let y = 0;

// The 'move' function is called when a keydown event is triggered.
function move(event){
    
    // Check which arrow key was pressed using the 'event.key' property.
    switch(event.key){
        case "ArrowDown":
            // If the down arrow key was pressed, increase the 'y' coordinate by 5 pixels.
            y += 5;
            // Update the 'top' CSS property of 'myDiv' to move it down.
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            // If the up arrow key was pressed, decrease the 'y' coordinate by 5 pixels.
            y -= 5;
            // Update the 'top' CSS property of 'myDiv' to move it up.
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            // If the right arrow key was pressed, increase the 'x' coordinate by 5 pixels.
            x += 5;
            // Update the 'left' CSS property of 'myDiv' to move it to the right.
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            // If the left arrow key was pressed, decrease the 'x' coordinate by 5 pixels.
            x -= 5;
            // Update the 'left' CSS property of 'myDiv' to move it to the left.
            myDiv.style.left = x + "px";
            break;
        default:
            // Handle other keys (if needed).
            break;
    }
}
