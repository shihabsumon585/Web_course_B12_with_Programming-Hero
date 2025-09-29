const numbers = [1, 5, 6, 10, 45, 2, 7];

const greaterThan10 = numbers.filter(x => x > 10)
console.log(greaterThan10);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);