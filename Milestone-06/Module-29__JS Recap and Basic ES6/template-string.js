// const poem = "amm pata jora jora
// marbu chabuk chorbe ghora"

// const poem = "amm pata jora jora" +
// "marbu chabuk chorbe ghora" + 
// "ore khoka ghure dara"

// const poem = "amm pata jora jora \n" +
// "marbu chabuk chorbe ghora \n" + 
// "ore khoka ghure dara"


// const poem = `amm pata jora jora
// marbu chabuk chorbe ghora
// ore khoka ghure dara`

// console.log(poem);


function sum (num1, num2) {
    const result = num1 + num2;
    // const output = "sum of " + num1 + " and " + num2 + " is equal to " + result;
    const output = `sum of ${num1} and ${num2} is equal to ${result}`
    console.log(output);
}
sum(10,20)

const price = 50;
const discountedPrice = `Discounted price of ${price} after 20% discount ${price * 0.8}`
console.log(discountedPrice)