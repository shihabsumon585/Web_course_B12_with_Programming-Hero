const student = {
    name: 'Rafid',
    1: 50,
    'home-address': 'kochukhet',
    marks: 90
}

// dot notaiton
const studentName = student.name;

// bracket notaion
const studentOne = student['1']
// console.log(studentOne);

// console.log(student['home-address']);

for(const key in student) {
    const value = student[key]
    // console.log(value);
}

const propName = 'marks'
console.log(student[propName]);
