

function hello() {
    console.log("Today, we will learning Function");
}
hello(); //ফাংশনকে কল করতেছি

function moneyBag() {
    var money = 120;
    console.log("I have " + money + " Taka");
}
moneyBag();

// যোগ করার মেশিন
function jogKorarMechine(input1, input2) {
    var sum = input1 + input2;
    console.log("The sum is " + sum);
    return sum;
}
jogKorarMechine(13, 20);
var result = jogKorarMechine(20, 30);
console.log(result);