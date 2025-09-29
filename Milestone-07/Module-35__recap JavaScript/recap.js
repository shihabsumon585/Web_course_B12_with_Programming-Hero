// array.push(), array.pop(), array.unshift(), array.shift()

// array.push() ==> array এর শেষে নতুন কোনো string, boolean, number, object যোগ করার পদ্ধতি

// array.pop() ==> array এর শেষে দিক থেকে কোনো string, boolean, number, object বাদ দেয়ার পদ্ধতি

// array.unshift() ==> array এর শুরুতে নতুন কোনো string, boolean, number, object যোগ করার পদ্ধতি

// array.shift() ==> array এর শুরুতে কোনো string, boolean, number, object বাদ করার পদ্ধতি

// array.slice(startIndex, endIndex) ==> অ্যারের একটি অংশ কেটে নতুন অ্যারে বানায়। নতুন অ্যারে তৈরি করে, কিন্তু মূল অ্যারে বদলায় না। শেষের index বাদ যায়।

// array.splice(start, deleteCount, ...items) ==> অ্যারের মধ্যে থেকে element বাদ দেয় অথবা নতুন element যোগ করে। মূল অ্যারে পরিবর্তন হয়।





// template string (`` ==> backtik)
// const fName = "SHIHAB"
// const lName = "SUMON"

// console.log(fName, lName);
// normal string-> output: SHIHAB SUMON

// console.log(`I am MD ${fName} ${lName}`);
// template string --> output: I am MD SHIHAB SUMON



// arrow function --> ...rest


// spread operator --> ...
// const number = [1, 2, 3, 54, 5, 6, 7, 8];

// const newNumbers = [number, 9, 10, 11, 12, 26]
// const newNumbersSpread = [...number, 9, 10, 11, 12, 26]
// // console.log(number);
// console.log(newNumbers);
// console.log(newNumbersSpread);



// array-methods ==> map, filter, find and forEach
/** map() ==> এটি ‍অ্যারে একটি ম্যাথোড, যা মূল অ্যারে এর প্রতিটি ইলিমেন্ট এর উপর কিছু কাজ(ফাংশন) করে একটি নতুন ‍অ্যারে তৈরি করে। মূল অ্যারে পরিবর্তিত হয় না।
const products = [
    {name: "redmi", price: 3000},
    {name: "apple", price: 9500},
    {name: "sumsung", price: 4500}
]
const result = products.map(product => product.price * 2)
console.log(result);
*/

/** forEach() ==> এটি ‍অ্যারে একটি ম্যাথোড, যা array-এর প্রতিটি element-এর উপর একটি function চালায়, কিন্তু নতুন array return করে না। মূল array পরিবর্তিত হয় না।
const products = [
    {name: "redmi", price: 3000},
    {name: "apple", price: 9500},
    {name: "sumsung", price: 6000},
    {name: "apple", price: 9500},
    {name: "sumsung", price: 35000}
]
const result = products.filter(product => console.log(product.price * 2))
// output: 6000 19000 12000 19000 70000
console.log(result); // return না করায় result এর আউটপুট: []
*/

/** filter() ==> এটি ‍অ্যারে একটি ম্যাথোড, যা মূল অ্যারে এর প্রতিটি ইলিমেন্ট একটি শর্ত পূরণ করলে তাদের নিয়ে একটি নতুন ‍অ্যারে তৈরি করে। মূল অ্যারে পরিবর্তিত হয় না।
const products = [
    {name: "redmi", price: 3000},
    {name: "apple", price: 9500},
    {name: "sumsung", price: 6000},
    {name: "apple", price: 9500},
    {name: "sumsung", price: 35000}
]
const result = products.filter(product => product.name === "sumsung")
console.log(result);
output:
{name: 'sumsung', price: 6000} 
{name: 'sumsung', price: 35000}
*/

/** find() ==> এটি ‍অ্যারে একটি ম্যাথোড, যা মূল অ্যারে এর প্রতিটি ইলিমেন্ট একটি শর্ত দ্বারা চেক করতে থাকে। শর্তের সাথে মিলে যাওয়া প্রথম ELEMENT টি return করে এবং পরে লুপ বন্ধ হয়ে যায়। মূল অ্যারে পরিবর্তিত হয় না।
const products = [
    {name: "redmi", price: 3000},
    {name: "apple", price: 9500},
    {name: "sumsung", price: 6000},
    {name: "apple", price: 9500},
    {name: "sumsung", price: 35000}
]
const result = products.find(product => product.name === "sumsung")
// output: {name: 'sumsung', price: 6000}
console.log(result);
*/



// JSON, Fetch, keys, vlaues, array add or remove using dots
/** JSON ==> JSON এর ফুলফর্ম JavaScript Object Notation। এটা একটি ডেটা স্টোর এবং ট্রান্সফার করার ফরম্যাট, যা মানুষও পড়তে পারে এবং মেশিনও বুঝতে পারে। সোজা কথায়, ডেটা (data) organize এবং share করার একটি standard format. কোনো অবজেক্টকে JSON ডাটাতে পরিণত করতে:
const obj = { name: "Shihab", age: 25 };
const objectString = JSON.stringify(obj);
console.log(objectString); // '{"name":"Shihab","age":25}'

 আবার JavaScript ডাটাতে পরিণত করতে:
const objectParse = JSON.parse(objectString);
console.log(objectParse); // {name: 'Shihab', age: 25}
*/

/**
Key & Values access করার নিয়ম:
const obj = { name: "Shihab", age: 25 };
const allKeyOfObj = Object.keys(obj);
const allValuesOfObj = Object.values(obj);
console.log(allKeyOfObj); // ['name', 'age']
console.log(allValuesOfObj); // ['Shihab', 25]
 */


/**
// array add or remove using dots
const products = [
    {name: "redmi", brand: "xiomi", price: 4500, color: "black"},
    {name: "sam", brand: "sumsung", price: 5420, color: "sky"},
    {name: "redmi not 11", brand: "xiomi", price: 6500, color: "gray"},
    {name: "apple 17", brand: "apple", price: 145000, color: "gold"},
    {name: "apple 17 ultra", brand: "apple", price: 230000, color: "gray"}
];
const newData = {name: "walton 9A", brand: "walton", price: 3500, color: "aquamarine"};
const newArrayOfProducts = [...products, newData];
console.log(newArrayOfProducts);

const remainingArrayOfProducts = products.filter(product => product.brand !== "xiomi");
console.log(remainingArrayOfProducts);
const afterRemainingNewArray = [...remainingArrayOfProducts, newData]
console.log(afterRemainingNewArray);
*/






/**
// truthy, false Ternary operator, shortcut and or
// false value ==> 0, -0, false, null, undefined
// truthy value ==> "slfsldf", 5146846, {}, [], true
const test = "rahim"
if(test) {
    console.log("It's Truthy");
} else {
    console.log("It's Falsy");
}


with TERNARY OPERATOR
test ? console.log("It's Truthy") : console.log("It's Falsy");

example
const num = 15
const result = (num >= 10 && num < 20) ? "true" : "false";
console.log(result);

const isActive = false;
const showUser = () => console.log("show user green");
const hideUser = () => console.log("Hide user");
// isActive?showUser():hideUser();
isActive && showUser();
isActive || hideUser();


let num = "10";
const result = num-0;
console.log(typeof result); // output: number
*/


/**
const handleAddToStorage = () => {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const user = {name, mail}
    localStorage.setItem("user", JSON.stringify(user))
}

const storedItem = localStorage.getItem("user")
console.log(JSON.parse(storedItem));
*/


/**
// dot vs bracket notation
const person = {
    name: "hero alom",
    age: 10,
    friends: ["korim", "Rohim", "Abdur Rahman", "Sohel Rana"],
    salary: 10000,
    10: "secret code",
    "hero-boss": "under control"
}

const namePerson = person.name
const namePerson = person.10 // Error
const namePerson = person["name"]
const secretCodePerson = person[10]
console.log(secretCodePerson); // output: secret code
*/