/**
    <--- Array of Objects and Access Object inside an Array --->
    THIS IS CALLED ARRAY OF OBEJCT ---> মানে ARRAY এর ভিতরে OBJECT
*/
/**
const numbers = [1, 2, 43, 54, 4]
const players = [{}, {}, {}]
const employees = [
    {name: 'Ashik', designation: 'Content Writer', salary: 25000},
    {name: 'Atik', designation: 'Developer', salary: 29000},
    {name: 'Abdul Karim', designation: 'Digital Marketer', salary: 21000},
    {name: 'Ashifa', designation: 'Web Dev', salary: 29000}
]
console.log(employees);
console.log(employees[0]);
console.log(employees[3].designation);
for(const employee of employees) {
    console.log(employee);
    console.log(employee.name);
    console.log(employee.designation, employee.salary);
}

const employees = [
    {name: 'Ashik', designation: 'Content Writer', salary: 25000},
    {name: 'Atik', designation: 'Developer', salary: 29000},
    {name: 'Abdul Karim', designation: 'Digital Marketer', salary: 21000},
    {name: 'Ashifa', designation: 'Web Dev', salary: 29000}
]
for ( const emp of employees) {
    const person = emp;
    const personinfo = person.name + ': ' + person.salary
    console.log(personinfo);
}
question: how to change Object value?
ans:
employees[0].name = 'Ashraf' // ---> এখানে Ashik থেকে Ashraf পরিবর্তন করেছে।
*/