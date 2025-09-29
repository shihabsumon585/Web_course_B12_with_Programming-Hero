const person = {
	"name": "Shihab", // key = name, value = "shihab" (string)
	"age": 23, // value is a number
	"student": true, // value is boolean (true/false)
	"skills": ["HTML", "CSS", "JavaScript"] // value is an array (list)
}
console.log(person, "typeof:", typeof person);
/*
output:
{
  name: 'Shihab',
  age: 23,
  student: true,
  skills: [ 'HTML', 'CSS', 'JavaScript' ]
}
typeof: object
*/

//JSON stringigy
const personJSON = JSON.stringify(person);
console.log(personJSON, "typeof:", typeof personJSON);
/*
output:
{"name":"Shihab","age":23,"student":true,"skills":["HTML","CSS","JavaScript"]} ==> All are in double cotation (" ") without number and boolean.
typeof: string
*/

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON, "typeof:", typeof parseJSON);
/*
output:
{
  name: 'Shihab',
  age: 23,
  student: true,
  skills: [ 'HTML', 'CSS', 'JavaScript' ]
} typeof: object
*/










