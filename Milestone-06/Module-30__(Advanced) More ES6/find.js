const numbers = [1, 5, 6, 10, 45, 2, 7];


const firstEven = numbers.find(x => x % 2 === 0);
console.log(firstEven);


const greaterThan50 = numbers.find(num => num > 50)
console.log(greaterThan50); // output: undefined
const greaterThan4 = numbers.find(num => num > 4)
console.log(greaterThan4);