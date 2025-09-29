// function declaration
add(5,7)
function add (num1, num2) {
    return num1 + num2;
}

// function expression
// const addition = function (num1, num2) {
//     return num1 + num2;
// }

// const result = addition(17, 13);
// console.log(result)


// arrow function
// const add2 = (num1, num2) => num1 + num2;
// const result = add2 (17, 13);
// console.log(result);


// const multiply = (a, b) => a * b;
// console.log(multiply(5, 7));


// multi line arrow function
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    return result;
}
console.log(doMath(1, 2));