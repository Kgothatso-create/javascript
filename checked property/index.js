// Add a click event listener to the "Submit" button
document.getElementById("myButton").onclick = function() {
    // Get references to the HTML elements for the checkbox and payment options
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    // Check if the checkbox is checked (subscribed)
    if (myCheckBox.checked) {
        console.log("You are subscribed!");
    } else {
        console.log("You are NOT subscribed!");
    }

    // Check which payment option is selected
    if (visaBtn.checked) {
        console.log("You are paying with a Visa!");
    } else if (mastercardBtn.checked) {
        console.log("You are paying with a Mastercard!");
    } else if (paypalBtn.checked) {
        console.log("You are paying with PayPal!");
    } else {
        console.log("You must select a payment type!");
    }
}
