// const student = {
//     name: 'Rafid',
//     1: 50,
//     family: {
//         title: 'bhuiyan',
//         mother: {
//             name: 'noor Jahan',
//             age: 45
//         }
//     },
//     'home-address': 'kochukhet',
//     marks: 90
// }

// console.log(student.family.mother.age);



const student = {
    name: 'Rafid',
    1: 50,
    family: {
        title: 'bhuiyan',
        // mother: {
        //     name: 'noor Jahan',
        //     age: 45
        // }
    },
    'home-address': 'kochukhet',
    marks: 90
}

console.log(student.family.mother?.age);