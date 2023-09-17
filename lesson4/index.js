// et username = window.prompt("What is your name") ;
// console.log(username);

// Declare a variable 'username' to store the user's name
let username;

// Attach a click event handler to an HTML element with the id 'myButton'
document.getElementById("myButton").onclick = function(){

    // Retrieve the value entered by the user in an HTML input element with the id 'myText' and store it in the 'username' variable
    username = document.getElementById("myText").value ;
    
    // Log the username to the browser console
    console.log(username);
    
    // Update the content of an HTML element with the id 'myLabel' to display a greeting message with the user's name
    document.getElementById("myLabel").innerHTML = "Hello " + username;

}
