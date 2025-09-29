const sallery = 25000;
const isBCS = true;
const height = 73;
const hasCar = false;

// if (sallery > 20000) {
//     console.log("Su----patro")
// }
// else {
//     console.log ("onno patro khuji")
// }

// if (sallery > 20000 && height > 72) {
//     console.log("Su----patro")
// }
// else {
//     console.log ("onno patro khuji")
// }
//output: Su----patro; ===> and(&&) ar khetre duita shortoi fill-up kora lagbe

// if (sallery > 20000 || height > 82) {
//     console.log("Su----patro")
// }
// else {
//     console.log ("onno patro khuji")
// }
//output: Su----patro; ===> or(||) ar khetre duita moddhe jekono akta shorto fill-up kora lagbe

// more and more condition
if (sallery > 20000 && height > 72) {
    console.log("Su----patro")
}
else {
    console.log ("onno patro khuji")
}
//output: Su----patro; ===> and(&&) ar khetre duita shortoi fill-up kora lagbe


// -----------------------COMPLEX CONDITION--------------------------------------
if(sallery > 25000 && hasCar == true) {
    console.log('bolo baba kobul');
}
else {
    console.log('vags tui mokbul')
}