/**
    <--- Copy ARRAY elements to another ARRAY --->
*/

/**
let price = 25;
let comp_price = price;

price = 12;
comp_price = 15;

console.log(price); // output: 12
console.log(comp_price); // output: 15

// On the other case
const products = [25, 25, 25]
const comp_products = products;

comp_products[0] = 15;
products[1] = 55;

console.log(comp_products);
// output:
// [15, 25, 25]
// [15, 25, 25]
console.log(products);
// output:
// [15, 55, 25]
// [15, 55, 25]

//note: যখন একটি করে মান ছিল তখন এটা ঠিক মতো কাজ করছিল। কিন্তু যখন ARRAY এর মধ্যে const comp_products = products; এরকম করছি তখন একটি আর কাজ করছে না। একটি ARRAY এর মান পরিবর্তন করছি বাট সম্পৃক্ত অপর ARRAY এরও মান পরিবর্তন হয়ে যাচ্ছে। এক্ষেত্রে করণীয় নিচে দেয়া হলো:---
===> way 1
const products = [25, 25, 25]
const comp_products = []
for(const product of products) {
    comp_products.push(product)
}
console.log(comp_products);
// output:
// [15, 25, 25]
// [15, 25, 25]
console.log(products);
// output:
// [25, 55, 25]
// [15, 25, 25]

===> way 2
const numbers = [1, 2, 3, 4];
const new_numbers = Array.from(numbers);
const new_numbers = [].concat(numbers)
const new_numbers = [...numbers]

//note: উপরের 3টি লাইন এর যেকোনো একটি দিয়ে তারপর নিচের লাইনটি দিয়ে সঠিক ওয়েতে কাজ হয়ে যাবে। বিস্তারিত পরে জানবো।

numbers.push(99);

console.log(numbers);
// output: [1, 2, 3, 4, 99]
console.log(new_numbers);
// output: [1, 2, 3, 4]
*/






