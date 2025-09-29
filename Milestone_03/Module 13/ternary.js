/**
 * TERNARY ---> three parts
 * 
 * ?  :
 * 
 * condition ? 
 * 
 * condition ? do something when tru : do something when false
 */




const age = 20;
// if(age >= 18) {
//     console.log("You can vote.");
// }
// else {
//     console.log("Ghumai thako");
// }

// simple ternary
// age >= 18 ? console.log("Vote dio") : console.log("Ghumai thako")

let price = 500;
const isLeader = false;

// if (isLeader === true) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log(price);

// ternary advanced
price = isLeader === true ? 0 : price + 100;

// semi-advanced
if(isLeader === true){
    if(price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price = 1000;
}

// Feel free to ignore this one
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
