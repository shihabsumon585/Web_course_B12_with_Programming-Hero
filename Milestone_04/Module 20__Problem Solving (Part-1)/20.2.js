/**
    <--- 20-2 Unit Convert Inch to Feet, miles to kilometre --->
 */

// 12 inch 1 feet
function inchToFeet (inch) {
    const feet = inch / 12;
    return feet;
}

// console.log(inchToFeet2(75));

// 75 inch = 6 ft 4 inch.
function inchToFeet2 (inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    result = feetNumber + ' ft ' + inchRemaining + ' inch. '
    return result;
}

// console.log(inchToFeet2(75));


function mileToKilometer (mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

function KiloMeterToMiles (kilo) {
    const mile = kilo * 0.621371;
    return mile;
}