let data; // output: falsy
data = 0; // output: falsy
data = ''; // output: falsy
data = ' '; // output: truthy
data = 1; // output: thuthy
data = '0'; // output: thuthy
data = false; // output: falsy
data = true; // output: truthy
data = {}; // output: truthy
data = []; // output: truthy
data = false //
data = true //
data = [] //


console.log(typeof data);
console.log('value of data', data);


if(data) {
    console.log('value of data is truthy');
} else {
    console.log(data, 'is falsy');
}


// if I need to falsy value to go inside of block
// use logical not
if(!data) {
    console.log('inside if with a falsy value');
}


// capture al positive value
// double not --> !!
// capture any value to boolean (true false)
if(!!data === true) {
    console.log('only true inside the double not');
}

