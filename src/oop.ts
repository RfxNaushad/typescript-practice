// OOP
// Abstraction
// Encapsulation
// Inheritance 
// Polymorphism



// Create Class, Object , Parameter Properties

class Animal {
    //public name: string;  //by default these are public we can also write PUBLIC to make it more clear
    sound: string;
    species: string;
     
    // need constructor to access the property of name, sound, string
    // parameters properties
    constructor(public name: string, sound: string, species: string){
        // this.name = name;
        this.sound = sound;
        this.species = species
    }
    
    // Method in class
    makeSound(){
        console.log(`this ${this.name} sound like ${this.sound}`);
    }
}

const dog = new Animal('German Shephard', 'dog', 'ghew ghew')
const cat = new Animal('persian', 'cat', 'Mew Mew')
dog.makeSound()
cat.makeSound()


// now to clearly write and make the code short we can use parameter properties

class Animal2 {
    constructor(public name: string, public sound: string, public species: string) {
    }

    makeSound2(){
        console.log(`this ${this.name} of species ${this.species} sound like ${this.sound}`);
    }
}

const sun = new Animal2("Sun", "gorom", "human")
sun.makeSound2()


// Inheritance --- the concept of inheritance is you will extends parent class to the other class and use them. Its like getting taka from your
// father , your father from your grandfather.

class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address
    }

    makeSleep(hours: number): string{
        // console.log(`${this.name} sleep for ${hours} hours`);
        return `${this.name} sleep for ${hours}`
    }
}   //this is parent class

class Student extends Person {  //using parent class by extending it. This call inheritance
    constructor(name: string, age: number, address: string){
        super(name, age, address)
    }
}

const std = new Student("Naushad", 25, "Dhaka")
std.makeSleep(7)

class Teacher extends Person{
    designation: string
    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address)
        this.designation = designation
    }

    makeClass(numOfClass: string){
        console.log(`${this.name} has ${numOfClass} classes`);
    }
}

const teacher = new Teacher("Sun", 29, "CTG", "English Teacher")
teacher.makeClass('4')


// type guard / type narrowing
