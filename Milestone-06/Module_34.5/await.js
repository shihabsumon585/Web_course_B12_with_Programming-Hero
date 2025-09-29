async function loadData () {
    console.log("one")
    console.log("two")
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(data => console.log("data got"))

    // const res = await fetch("https://jsonplaceholder.typicode.com/usrs")
    // const data = await res.json()
    // console.log("data got await");

    console.log("four")
    console.log("five")
}
// loadData()


// try {
    
// }
// catch (error) {

// }


const loadData2 = async () => {
    console.log(1);
    console.log(2);
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        console.log("got data", data.length);
    }
    catch(error){
        console.log("error happend");        
    }
    console.log(4);
    console.log(5);
}
loadData2()