
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to Yen
    let valueInYen = (valueInDollar / 1.07) * 156.5 ;
    // return the Yen value

    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to Pound
    let valueInPound = (valueInYen / 156.5)* 0.87;
    // return the Pound value

    return valueInPound;
}



// app.js file content
console.log("Hello World")
console.log(fromEuroToDollar(1).toFixed(2))
console.log(fromDollarToYen(1).toFixed(2))
console.log(fromYenToPound(1).toFixed(2))

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound}