// === first check the type. if type is different, they are different
// if type is same then checks the value, if value is same ---> true, if value is false ---> false

console.log(2 === 2); // output: true
console.log(2 === '2'); // output: false
console.log(1 === 2); // output: false
console.log(true === 2); // output: false
console.log(false === 2); // output: false
console.log(null === undefined); // output: false
console.log(NaN === NaN); // output: false
console.log(0 === ''); // output: false
console.log([] === ''); // output: false