// function sum(num1, num2) {
//     const total = num1 + num2;
//     console.log(num1, num2, total);
// }
// sum(10, 20, 30, 40, 50);
// sum(10); // output: 10 undefined Nan
// Nan 
// --> Not a Number
// sum()
// function sum(num1, num2 = 0) {
//     const total = num1 + num2;
//     console.log(num1, num2, total);
// }
// // sum(10, 20, 30, 40, 50);
// sum(10); // output: 10 undefined Nan
// // Nan --> Not a Number
// sum(10, 20)
/*
function sum(num1 = 0, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}
// sum(10, 20, 30, 40, 50);
sum(10); // output: 10 undefined Nan
// Nan --> Not a Number
sum(10, 20)
sum()
*/
/*
function multiply (num1 = 0, num2 = 0) {
    const result = num1 * num2;
    console.log(result);
}
// multiply(10, 10)
multiply(10) // output: 0
*/
// function multiply (num1 = 1, num2 = 1) {
//     const result = num1 * num2;
//     console.log(result);
// }

// // multiply(10, 10) // output: 100
// multiply(10) // output: 10

function fullName(first, last = "") {
    const name = first + " " + last;
    console.log(name);
}
fullName('kamruzzaman') // kamruzzaman
fullName('kamruzzaman', 'Hassan') // kamruzzaman Hassan




/*
some thumb rule of default value. may be usfull

add, substruct --> 0

multiply --> 1

string --> ""

array = []

object = {}
*/