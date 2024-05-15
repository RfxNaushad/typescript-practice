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


// Inheritance 