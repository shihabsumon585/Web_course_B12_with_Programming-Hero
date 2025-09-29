const addNumberToLS = () => {
    const number = Math.ceil(Math.random()*100)
    console.log(number)
    localStorage.setItem("number", number)
}

const getNumberFromLS = () => {
    const number = localStorage.getItem("number");
    console.log("get saved number from local storage", number)
}


// toString()
// JSON.stringigy()
// JSON.parse()

// set and get a object and array in JavaScript localStorage



const addObjectToLS = () => {
    const customer = { name: "Md Shiha Sumon", products: 3, prices: 2880, age: 21, address: "Mirpur"}
    const user = localStorage.setItem("user", JSON.stringify(customer));  
}

const readObjectToLS = () => {
    const readObject = JSON.parse(localStorage.getItem("user"))
    console.log(readObject);
}