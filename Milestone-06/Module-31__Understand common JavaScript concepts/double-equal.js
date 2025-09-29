//  type coersion (type convert)

//  for double-equal(==) if one value is string, another is number: converts string --> number then compare
// if one is boolean and another is number. converts bollean to number. true --> 1 and false--> 0

console.log(2 == 2); // output: true
console.log(2 == '2'); // output: true
console.log(1 == 2); // output: false

console.log(true == 1); // output: true
console.log(false == 0); // output: false
console.log(true == '1'); // output: true
console.log(false == '0'); // output: false

console.log(true == 2); // output: false
console.log(false == 2); // output: false

console.log(null == undefined); // output: true
console.log(NaN == NaN); // output: false


console.log(0 == ''); // output: 
console.log([] == ''); // output: true
console.log([5] == '5'); // output: true *[5] কে প্রথমে '5' স্টিং এ পরিণত করে তারপর বাকি কাজ হয়।

console.log({} == {}); // output: false ==> search in ai
console.log([] == []); // output: false ==> search in ai




