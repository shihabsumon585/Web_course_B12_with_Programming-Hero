/**
 * class --> template
 * properties
 * method (a special type of function inside a class without the function keyword)
 * 
 * 
 * 
 * Object 
 * 
 * 
 */



class Player {
    constructor(name, age){
        this.name = name
        this.age = age
        this.location = 'bangladesh'
        // console.log('Calling the constructor method', name);
    }
    goal(){
        console.log('score a goal');
    }
    getTeamName(){
        return 'Borsa'
    }
}


const player1 = new Player('Tom Brady', 34)
const player2 = new Player('O Shanto', 21)
console.log(player1);
console.log(player1 instanceof Player);
console.log(player2);
// player1.goal()
// player1.getTeamName()
// console.log((player1));