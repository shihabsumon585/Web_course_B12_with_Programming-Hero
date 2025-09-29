
// 1. introduction to JavaScript

// variables are named containers used to store data values.
// var, let and const
// var name = 'john';
// var --> keyword
// name --> Name Of Vairable/indentifier
// = --> assignment operator 
// 'john' --> Value of Vairable
// ; --> semicolon/statement finish sign


/**
 * variable initial and declaration
 * var age ---> declaration
 * age = 20; ---> intialization
 * 
 */

/**
 * *Naming Convention
 * var firstName = 'ismail'; 
 * firstName --> Camel Case
 */

// ============================================================================
// ============================================================================

// 2. DATA TYPES
/**
 * there are two types of DATA TYPES.
 * i. premetive data type
 * ii. non-premetive data type
 * 
 * * single and simple value is premetive data type.
 * * collection and complex value is non-premetive data type
 */

/** Premetive data type */
/** Number data type */
// var age = 20 //round number
// var money = 100.50 //floating number
// console.log(age);
// console.log(typeof age);

/** Boolean data type */
// var isStudent = true / false // 1 / 0
// console.log(typeof isStudent);

/** String data type */
// string: text inside quotation "Hello"
// var address = "Borodarpur, Gomastapur, Chapainawabganj"

/** Undefined data type */
// var working
// console.log(working);
// console.log(typeof working);

/** Null data type */
// var y = null
// console.log(typeof y);



/** Non-premetive data type */
// {
//     name: 'john'
//     age: 20
// }
// [10, 'john', false, undefined, null]
//  * what is the main between primitive vs non-primitive data type


// ============================================================================
// ============================================================================

/*// 3. Operators
    * Arithmetic
    * Assignment
    * Comparison
    * Logical
    * Ternary
*/

/**
Arithmetic: +, -, *, /, %, **, ++, --
var a = 10
var b = 20
console.log(a + b);
var c = 'John'
var d = 'Due'
console.log(c + d);

Assignment: =, +=, -= 

Comparison: ==, ===, !=, !==
var a = 20
var b = 20
console.log(a == b)
output: true
console.log(a != b)
output: false
console.log(a === b)
output: false
console.log(a !== b)
output: true
    Question: what is the maun different between == and === ?
    Answer: == only check the value of variable and === check the value of variable and data type of variable.
console.log(a > b) --> true
console.log(a < b) --> false
console.log(a >= b) --> true
console.log(a <= b) --> true

Logical Operator: &&(AND), ||(OR), !(NOT)
var age = 20;
if(age >= 19 && age <= 30) {
    console.log("Young Adult")
}else {
    console.log("Child or Older");
}

var name = 'john'
var isStudent = true
if(name === 'john' && isStudent === true) {
    console.log("User Verified")
}else {
    console.log('Sorry, your are not authorised');
}
var name = 'john'
var isStudent = false
if(name === 'john' || isStudent === true) {
    console.log("User Verified")
}else {
    console.log('Sorry, your are not authorised');
}
*/ 

// ============================================================================
// ============================================================================

/*// 4. Conditional Statements
    * if
    * else
    * else...if

if and else Condition --->
var money = 6000;
if (money >= 5500) {
    console.log("Enrolled batch 12")
}else {
    console.log("You don't have enough money")
}
output: Enrolled batch 12
---Reverse vabeo kora jai--- ==> এককথাই বলা যায় if এর বিপরীত ফাংশন else
if (money <= 5500) {
    console.log("You don't have enough money")
}else {
    console.log("Enrolled batch 12")
}
output: Enrolled batch 12

else ...if Condition --->
var marks = 39;
if (marks >= 80) {
    console.log("Grade: A+")
} else if (marks >= 75) {
    console.log("Grade: A")
} else if (marks >= 70) {
    console.log("Grade: A-")
} else if (marks >= 65) {
    console.log("Grade: B+")
} else if (marks >= 60) {
    console.log("Grade: B")
} else if (marks >= 55) {
    console.log("Grade: B-")
} else if (marks >= 50) {
    console.log("Grade: C+")
} else if (marks >= 45) {
    console.log("Grade: C")
} else if (marks >= 40) {
    console.log("Grade: D")
} else {
    console.log("Grade: F")
}

nested if else Condition --->
var myMarks = 75
var yourMarks = 70
if(myMarks >= 90) {
    if(yourMarks >= 80) {
        console.log("Let's be friend")
    } else {
        console.log("we can't be friend")
    }
} else {
    console.log("Go to home and sleep")
}
*/

// ============================================================================
// ============================================================================


/**
5. LOOPS
    * for
    * while
    * do...while
    ==> break
    ==> continue

Question: What is Loops?
Answer: A loop is a way to repeat the same task multiple times until a condition becomes false.


<--- for LOOPS --->
*** syntax value rules for "for loops"
    for(init value; condition; update){
        code goes here
    }
Question: When using in "for" loops?
Answer: A for loop is used when you know in advance how many times you want to execute a block of code.
car count = 5
for (i = 1; i <= count; i++) {
    console.log('Count: '+i)
}

// Making Namta with for loops
var num = 10
for(i = 1; i <= 10; i++) {
    // 9 * 1 = 9
    console.log(num + " x " + i + " = " + i * num)
}


<--- while LOOPS --->
Question: When using in "while" loops?
Answer: You don’t know exactly how many times the loop should run, but you want it to continue as long as a condition is true.

*** syntax value rules for "for loops"
var i = 1
while(i <= 5) {
    console.log("count: " + i)
    i++
}


<--- do...while LOOPS --->
Question: When using in "do...while" loops?
Answer: You want the code to run at least once, even if the condition is false from the beginning.

*** syntax value rules for "for loops"
var i = 5
do {
    console.log("count: " + i)
    i++
} while(i < 5)
===> এখানে অন্তত পক্ষে একবার প্রিন্ট হবে। মানে আগে একবার প্রিন্ট হবে তারপর কন্ডিশন চেক করবে।


<--- LOOPS break --->
for (var i = 1; i < 10; i++) {
    if (i === 5) {
        break
    }
    console.log(i)
}
output:
1
2
3
4

note--> for এর ভিতরে ইন করার পর if দিয়ে যে কন্ডিশন দেয়া আছে সেটা যখন ফিলাপ করবে তখন লুপ থেকে ব্রেক নিয়ে নিবে। এখানে break দ্বারা এই কাজ ই করা হয়।


<--- LOOPS continue --->
for (var i = 1; i < 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}
output:
1
2
3
4
6
7
8
9

note--> continue দ্বারা বোঝাই যে কন্ডিশনে continue দেয়া থাকবে শুধুমাত্র ওই কন্ডিশন বা কন্ডিশনগুলো বাদে বাকিগুলো প্রিন্ট করবে। উপরে দেখে বোঝা যাচ্ছে 5 বাদে বাকিগুলো প্রিন্ট করেছে।
 */


// ============================================================================
// ============================================================================


/**
6. STRING
    * String
    * Mutable/Immutable --> changable/unchangable
    * toLowerCase, toUpperCase, trim
    * slice, concat, includes
    * Reverse a string

<--- String --->
var name = 'this is ismail'
console.log(name) --> this line for print
console.log(name.length) --> এই লাইন দ্বারা বোঝাই string টির মধ্যে কতটি জিনিস আছে।

<--- Mutable and Immutable --->
১. Mutable (পরিবর্তনযোগ্য)
Mutable মানে এমন ডেটা যার মান (value) তুমি পরবর্তীতে পরিবর্তন করতে পারো।

let myArray = [1, 2, 3];
myArray.push(4);  // নতুন মান যোগ করলাম
console.log(myArray); // Output: [1, 2, 3, 4]

note--> এখানে myArray হলো একটা mutable variable কারণ আমরা এর ভিতরের ডেটা পরিবর্তন করতে পেরেছি।


২. Immutable (অপরিবর্তনযোগ্য)
Immutable মানে এমন ডেটা যার মান একবার তৈরি হওয়ার পর আর পরিবর্তন করা যায় না।

let myName = "John";
myName[0] = "P";  // চেষ্টা করলাম পরিবর্তন করতে
console.log(myName); // Output: "John"

note--> এখানে string টাইপ myName হলো immutable, কারণ আমরা J কে P করতে পারি না।

তুলনা (Comparison Table):
বৈশিষ্ট্য	                   Mutable (পরিবর্তনযোগ্য)	                  Immutable (অপরিবর্তনযোগ্য)
মান পরিবর্তন করা যায়?	     ✅ হ্যাঁ	                               ❌ না
উদাহরণ	                   Array, Object	                        String, Number, Boolean
ব্যবহার	                     যখন ডেটা বারবার আপডেট করতে হবে	       যখন ডেটা স্থির রাখতে হবে


<--- toLowerCase, toUpperCase and trim --->
var message = "hello, how are you?"
console.log(message.toUpperCase())

var msg = "hello"
var firstcha = msg[0].toUpperCase() // কোনো স্পেসিফিক লেটার/অক্ষর কে Upper/Lower Case করতে .toLowerCase and .toUpperCase ব্যবহার হয়।

In programming, trim is a method or function used to remove whitespace (like spaces, tabs, or newline characters) from the beginning and end of a string.

✅ Example (JavaScript):
let name = "   Shihab   ";
let trimmedName = name.trim();
console.log(trimmedName); // Output: "Shihab"


<--- slice, concat and includes --->
var lastcha = msg.slice(1) // যেকোনো ভেরিয়েবলের প্রয়োজনীয় অংশ কেটে নিতে .slice ব্যবহার হয়। 
// ‍syntax of slice --> sting.slice(startindex, lastIndexArPorerta)

console.log(firstcha + lastcha) // output: Hello
console.log(firstcha.concat(lastcha)) // output: Hello  --> notes: কোনো কিছু পাশাপাশি বসাতে concat ব্যবহার হয়। এককথায় যোগের মতো কাজ করে।

var text = 'JavaScript is awesome'
console.log(text.includes('asesome')); // কোনো ওয়ার্ড বা টেক্সট বা কোনো অংশ খুজে বের করতে includes ব্যবহার হয়।
output: true
var sentence = 'Hello world, welcome to the universe.'
if (sentence.includes('universe')) {
    console.log('Found')
} else {
    console.log('Not Found')    
}
output: Found


<--- Reverse a string --->
*** long way to reverse
var text = 'JavaScript is awesome'
var temp = ''
for(var i = 0; i < text.length; i++) {
    console.log(text[i]); // straight way
    temp = text[i] + temp
}
console.log(temp);

*** short way to reverse
let str = "hello";
let reversed = str.split("").reverse().join("");

console.log(reversed); // Output: "olleh"

ব্যাখা:-
🔹 1. split("")
এটা স্ট্রিংকে একটি একটি করে অক্ষরে ভাগ করে একটি অ্যারেতে পরিণত করে।
str = "hello"
str.split("")  → ["h", "e", "l", "l", "o"]
🔹 2. reverse()
এই ফাংশনটি অ্যারেটার সব এলিমেন্ট উল্টে দেয়।
["h", "e", "l", "l", "o"].reverse() → ["o", "l", "l", "e", "h"]
🔹 3. join("")
এই অংশটি অ্যারেটাকে আবার স্ট্রিংয়ে পরিণত করে।
["o", "l", "l", "e", "h"].join("") → "olleh"
✅ সব মিলিয়ে এক লাইনে:

প্রশ্ন: split and join chara only reverse kaz kore na?
উত্তর: না, শুধুমাত্র reverse() দিয়ে সরাসরি স্ট্রিং রিভার্স করা যায় না। কারণ:
JavaScript-এ reverse() শুধুমাত্র Array এর জন্য কাজ করে।
অর্থাৎ, তুমি যদি এমন কিছু লেখো:
let str = "hello";
let reversed = str.reverse(); // ❌ এইটা কাজ করবে না!
তাহলে Error বা undefined পাবে, কারণ reverse() স্ট্রিং-এর ফাংশন না, এটা array method।
তাই তোমাকে প্রথমে split("") দিয়ে স্ট্রিংকে array বানাতে হয়, তারপর reverse(), তারপর join("") দিয়ে আবার স্ট্রিং বানাতে হয়।
সঠিক নিয়ম:
let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // Output: "olleh"

📝 Extra Info (যদি আগ্রহ থাকেঃ)
তুমি চাইলে for loop দিয়েও স্ট্রিং রিভার্স করতে পারো, তখন split() লাগবে না।

let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed); // Output: "olleh"
এইটা হলো loop দিয়ে রিভার্স করার উপায়।
*/


// ============================================================================
// ============================================================================


/**
7. OBJECTS
    * Propeties
    * Methods
    * Nesting
    * Looping

<--- OBJECT --->
var person = {
    name: 'ismail', //--> key : value
    age: 20, //--> key : value
    isStudent: true //--> key : value
}

<--- Properties --->
var person = {
    name: 'ismail', //--> key : value 
    age: 20, //--> key : value
    isStudent: true //--> key : value
}
properties = key: value  // note: কি এবং ভাল্যু কে একসাথে properties বলে।
console.log(typeof person) // output: object

==> How to access object properties?
ans: we will two dirrection access the object properties.
i. dot notation "."  ii. array notaion "[]"
dot notation:--
console.log(person.name) // output: ismail
array:--
console.log(person['name']) // output: ismail

==> How to change value of object properties?
ans: this also two dirrection change the value of object properties.
i. dot notation "."  ii. array notaion "[]"
dot notation:--
person.age = 25
array notation:--
person['age'] = 25


<--- Nesting --->
var person = {
    name: 'ismail',
    age: 20,
    isStudent: true,
    address: {
        villege: 'Borodarpur',
        thana: 'Gomastapur',
        zela: 'Chapainawabganj',
        district: 'Rajshahi',
        country: 'Bangladesh'
    }
}
console.log(person.address.thana); // output: Gomastapur
note: NESTING also using the dot and array notation.
*/

/**
Question: how to delete a property from object?
ans:
var person = {
    name: 'ismail',
    age: 20,
    isStudent: true,
    address: {
        villege: 'Borodarpur',
        thana: 'Gomastapur',
        zela: 'Chapainawabganj',
        district: 'Rajshahi',
        country: 'Bangladesh'
    }
}
delete person.address
console.log(person) // output: { name: 'ismail', age: 20, isStudent: true }
 */

// 

// ============================================================================
// ============================================================================


/**
 <--- keys --->
var computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'inten',
    hdd: '512gb',
    monitor: 'hp'
}
var computerKeys = Object.keys(computer)
console.log(computerKeys); // output: [ 'brand', 'price', 'processor', 'hdd', 'monitor' ]


 <--- values --->
var computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'inten',
    hdd: '512gb',
    monitor: 'hp'
}
var computerValues = Object.values(computer)
console.log(computerValues); // output: [ 'lenovo', 35000, 'inten', '512gb', 'hp' ]


 <--- Object Looping (অবজেক্ট লুপিং) --->
অবজেক্টের সব key বা value এক এক করে বের করে আনার জন্য লুপ ব্যবহার করা হয়।
উদাহরণ: for...in লুপ

const person = {
  name: 'Ismail',
  age: 20,
  isStudent: true
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
Output:
name: Ismail
age: 20
isStudent: true




 */

