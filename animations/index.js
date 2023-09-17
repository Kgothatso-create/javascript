// Get the HTML elements with the IDs "myButton" and "myDiv" and store them in variables.
const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

// Add a click event listener to the "myButton" element, calling the "slide" function when clicked.
myButton.addEventListener("click", slide);
// You can also uncomment and use the "rotate" or "scale" functions for different animations.

function slide(){
    // Initialize variables for animation control.
    let timerId = null;
    let x = 0;
    let y = 0;

    // Set up a timer to repeatedly call the "frame" function at 5ms intervals.
    timerId = setInterval(frame, 5);

    // The "frame" function updates the animation frame.
    function frame(){
        // Check if the animation has reached its desired position.
        if(x >= 200 || y >= 200){
            // If so, stop the animation by clearing the timer.
            clearInterval(timerId);
        }
        else{
            // Increment the x and y positions to create the sliding effect.
            x += 1;
            y += 1;
            // Update the "top" and "left" CSS properties of "myAnimation" to move it.
            myAnimation.style.top = y + 'px';
            myAnimation.style.left = x + 'px';
        }
    }
}

// You can define similar "rotate" and "scale" functions for different animations
// by changing the transformation properties within the "frame" function.
