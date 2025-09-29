/**
// task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

Solution:---------------------------
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reversed = []
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    reversed.unshift(colors[i])
}
console.log(reversed);
*/


/**
// task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]

Solution:---------------------------
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = []
for(let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i])
    }
}
console.log(evenNumbers);
*/


/**
// task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

Solution:---------------------------
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
var result = "";
for(var name of numbers) {
    result = result.concat(name)
}
console.log(result);
// another way
result = numbers.join("")
console.log(result);
*/

/**
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'

Solution:---------------------------
const statement = 'I am a hard working person';
let words = statement.split(' ');
console.log(words);
let reversedWords = words.reverse();
console.log(reversedWords);
let result = reversedWords.join(" ")
console.log(result);

*/


/**
Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]

Solution:---------------------------
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 99;
console.log('Original:', original, 'Copy:', copy);

output:
Original: [ 1, 2, 3 ] Copy: [ 99, 2, 3 ]
*/


/**
Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ooutput:
John scored 85
Alice scored 90

Solution:---------------------------
let student = [
    { name: "John", marks: 85},
    { name: "Alice", marks: 90}
]
for(let i = 0; i < student.length; i++) {
    console.log(student[i].name, "scored", student[i].marks);
}
*/

/**
Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]

Solution:---------------------------
let firstArray = [
    [1, 2],
    [3, 4],
    [5, 6]
]
firstArray[1].shift();
firstArray[1].unshift(99);
console.log(firstArray);

let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

// দ্বিতীয় row (index 1) এর প্রথম item (index 0) আপডেট
arr[1][0] = 99;

console.log(arr);
*/