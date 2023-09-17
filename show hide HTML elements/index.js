// Select the HTML button element with the ID "myButton" and store it in the 'myButton' variable.
const myButton = document.querySelector("#myButton");

// Select the HTML image element with the ID "myImg" and store it in the 'myImg' variable.
const myImg = document.querySelector("#myImg");

// Add a click event listener to the 'myButton' element.
myButton.addEventListener("click", () => {

    // Check the current visibility style property of the 'myImg' element.
    if(myImg.style.visibility == "hidden"){
        // If the image is currently hidden, change its visibility to "visible."
        myImg.style.visibility = "visible";
    }
    else{
        // If the image is currently visible, change its visibility to "hidden."
        myImg.style.visibility = "hidden";
    }
})
