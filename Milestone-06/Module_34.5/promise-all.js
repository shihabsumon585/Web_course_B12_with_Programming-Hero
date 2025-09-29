const getData1 = new Promise((resolve, reject) => {
    const num1 = Math.random() *10;
    console.log("generated", num1);
    if(num1 > 5) {
        resolve({num: num1})
    }
    else {
        reject({err: "Data is not available"})
    }
})
const getData2 = new Promise((resolve, reject) => {
    const num2 = Math.random() *10;
    console.log("generated", num2);
    if(num2 > 5) {
        resolve({num: num2})
    }
    else {
        reject({err: "Data is not available"})
    }
})
const getData3 = new Promise((resolve, reject) => {
    const num3 = Math.random() *10;
    console.log("generated", num3);
    if(num3 > 5) {
        resolve({num: num3})
    }
    else {
        reject({err: "Data is not available"})
    }
})
Promise.all([getData1, getData2, getData3])
    .then(res => console.log(res))
    .catch(err => console.log(err))