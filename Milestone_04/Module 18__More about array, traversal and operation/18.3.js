/**
    <--- Reverse an array: 3 Techniques explained(for loop, unshift, reverse methods) --->
*/

/**
*** PUSH ----> লাস্টের দিকে উপাদান যোগ করতে থাকে।
*** POP ----> লাস্টের দিকে থেকে উপাদান বের করতে থাকে।
*** SHIFT ----> শুরু থেকে উপাদান বের করতে থাকে।
*** UNSHIFT ----> শুরুতে উপাদান যোগ করতে থাকে।

// REVERSE
==> way 1
const numbers = [1, 2, 3, 4, 5]
let reversed = []
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    reversed.unshift(numbers[i])
}
console.log(reversed);

==> way 2
const numbers = [1, 2, 3, 4, 5]
let reversed = []
for (let i = (numbers.length - 1); i >= 0; i--) {
    reversed.push(numbers[i]);
}
console.log(reversed);

==> way 3
const numbers = [1, 2, 3, 4, 5]
let reversed = []
for (const num of numbers) {
    reversed.unshift(num);
}
console.log(reversed);

==> way 4
const numbers = [1, 2, 3, 4, 5]
numbers.reverse()
console.log(numbers);

==> way 5
const numbers = [1, 2, 3, 4, 5]
const result = numbers.reverse();
console.log(result);
*/
