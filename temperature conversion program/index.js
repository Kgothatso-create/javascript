// Attach a click event handler to the "submitButton" element
document.getElementById("submitButton").onclick = function () {
    let temp;

    // Check which radio button is selected (Celsius or Fahrenheit)
    if (document.getElementById("cButton").checked) {
        // Get the temperature value from the "textBox" input and convert it to a number
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        
        // Convert the temperature to Celsius using the toCelsius function
        temp = toCelsius(temp);
        
        // Display the converted temperature with the unit "°C"
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    } else if (document.getElementById("fButton").checked) {
        // Get the temperature value from the "textBox" input and convert it to a number
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        
        // Convert the temperature to Fahrenheit using the toFahrenheit function
        temp = toFahrenheit(temp);
        
        // Display the converted temperature with the unit "°F"
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    } else {
        // If neither radio button is selected, display a message to "Select a unit"
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

// Function to convert temperature from Fahrenheit to Celsius
function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

// Function to convert temperature from Celsius to Fahrenheit
function toFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
}
