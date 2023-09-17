// JavaScript toLocaleString() currency

// toLocaleString() = returns a string with a language-sensitive representation of this number
// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

// Declare a numeric value
let myNum = 123456.789;

// Uncomment and use one of the following lines to format the number in a specific locale:

// Format as currency in US English
// myNum = myNum.toLocaleString("en-US");

// Format as currency in Hindi (India)
// myNum = myNum.toLocaleString("hi-IN");

// Format as currency in standard German (Germany)
// myNum = myNum.toLocaleString("de-DE");

// Format as currency in US English with USD currency symbol
myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });

// Format as currency in Hindi (India) with INR currency symbol
// myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });

// Format as currency in standard German (Germany) with EUR currency symbol
// myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

// You can also format the number as a percentage or with a custom unit (e.g., Celsius):
// myNum = myNum.toLocaleString(undefined, { style: "percent" });
// myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });

// Display the formatted number
console.log(myNum);
