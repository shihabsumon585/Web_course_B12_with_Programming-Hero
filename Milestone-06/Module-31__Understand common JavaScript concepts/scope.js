/*
if(true) {
    const data = 58;
    console.log('inside the if block', data); // output: inside the if block 58
}
console.log(data);  // output: ERROR ==> because data is defined in the block scope.
*/


/*
while (true) {
    
}
*/

/*
for (const num of [1, 2, 3, 4, 5, 6, 6, 5]) {

}
*/


/*
// function scope or local scope
function doMath (a, b) {
    console.log(a, b); // output: available
    const sum = a + b; // output: available
    const total = sum + 10; // output: available
}
console.log(a, b); // output: ERROR ==> cannot acces a and b in outside.

*/


// const name = 'Tom Hanks';

// function doMath (a, b) {
//     console.log(name); // output: available
// }
// doMath()




// function doMath (a, b) {
//     console.log(a, b); // output: available
//     const sum = a + b; // output: available
//     const total = sum + 10; // output: available
// }
// function doMath2 (c, d) {
//     doMath(444, 5555) // any function calling any places.
// }
// doMath2()




// function doMath (a, b) {
//     score(25, 75) // if we are calling from here then we are get output.
//     function score (first, last) {
//         console.log(first, last);
//     }
//     score(25, 75) // if we are calling from here then we are get output.
// }
// score(25, 75) // if we are calling from here then we can not get an output. it have to do ERROR....... অর্থ্যাৎ ফাংশন1 এর ভেতরের ফাংশন2 কে শুধুমাত্র ফাংশন1 এর ভেতর থেকেই কল করা যাবে। এর বাইরে কল করলে ইরর আসবে।
// doMath()





console.log(location); // here cannot get location
let location = 'balur ghat'
console.log(location); // here get location









