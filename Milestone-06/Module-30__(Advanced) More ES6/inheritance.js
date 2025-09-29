class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}


class Dog extends Animal {
    constructor(name, breed, age){
        super(name, age)
        this.breed = breed;
    }

    bark(){
        console.log(`${this.name} is barking`);
    }
}



class Cat extends Animal {
    constructor(name, color, age){
        super(name, age);
        this.color = color;
    }
    meow(){
        console.log(`${this.name} is meowing`);
    }
}


class Bird extends Animal {
    constructor(name, species, age){
        super(name, age)
        this.species = species;
    }
    fly(){
        console.log(`${this.name} is flying`);
    }
}


const dog1 = new Dog('coffee', 'Deshi', 1)
console.log(dog1);
dog1.eat()


// const cat1 = new Cat('SP', 'White', 5)
// cat1.eat()


// const bird1 = new Bird('Kokil', 'Deshi', 2)