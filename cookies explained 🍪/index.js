// Get HTML elements by their IDs and store them in variables.
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

// Add a click event listener to the "submitBtn" element.
submitBtn.addEventListener("click", () => {
    // Call the "setCookie" function to set the first name and last name cookies.
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

// Add a click event listener to the "cookieBtn" element.
cookieBtn.addEventListener("click", () => {
    // Call the "getCookie" function to retrieve and populate the input fields with cookie values.
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

// Function to set a cookie with a specified name, value, and days to live.
function setCookie(name, value, daysToLive){
    // Create a new Date object.
    const date = new Date();
    // Calculate the expiration date by adding the specified number of days to the current date.
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    // Convert the expiration date to a UTC string.
    let expires = "expires=" + date.toUTCString();
    // Set the cookie with the provided name, value, and expiration date, and specify the path.
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to delete a cookie with a specified name.
function deleteCookie(name){
    // Call the "setCookie" function with a null value to effectively delete the cookie.
    setCookie(name, null, null);
}

// Function to get the value of a cookie with a specified name.
function getCookie(name){
    // Decode the cookie string to handle special characters.
    const cDecoded = decodeURIComponent(document.cookie);
    // Split the decoded cookie string into an array of individual cookies.
    const cArray = cDecoded.split("; ");
    let result = null;
    
    // Iterate through the cookie array to find the cookie with the specified name.
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            // Extract the value of the cookie and assign it to the "result" variable.
            result = element.substring(name.length + 1);
        }
    });
    // Return the value of the specified cookie.
    return result;
}
