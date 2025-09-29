/** Problem 06 : (Current Salary ) */
var experience = 30;
var startingSalary = 45000;
//write your code here
// var increament = 5 / 100;
// var currentSalary = startingSalary * (1 + increament)^experience;
// console.log(currentSalary.toFixed(2));

var increament = 5 / 100;
var currentSalary = startingSalary * Math.pow((1 + increament), experience);
console.log(currentSalary.toFixed(2));