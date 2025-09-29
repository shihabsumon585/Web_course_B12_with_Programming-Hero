//
/**
 * undefined --> not define
 */


// let money;
// console.log(money);


function total (a, b) {
    // console.log('value of parameters', a, b);
    const sum = a + b;
    // console.log('total is', sum);

}
// total() // output: value of parameters undefined undefined
// total(2) // output: value of parameters 2 undefined
// total(4, 3) // output: value of parameters 4 3
const result = total(5, 7)
// console.log("value of function call", result);



function total2 (a, b) {
    // console.log('value of parameters', a, b);
    if(a === undefined || b === undefined) {
        return;
    }
    if(a && b){
        const sum = a + b;
        return sum;
    }
}
const result2 = total2(1)
// console.log('result2', result2);



const phone = { brand: 'samsu', price: 12500}
// console.log(phone.price);
// console.log(phone.color);

const banks = ['sonali', 'rupali', 'jomuna']
// console.log(banks[1]); // output: rupali
// console.log(banks[10]); // output: undefined
delete banks[1]
console.log(banks);
console.log(banks[1]);


console.log(typeof undefined);  // output: undefined


console.log(typeof null);  // output: object