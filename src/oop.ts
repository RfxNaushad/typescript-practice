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

// key of guard

type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric){ //this is called key of guard
   if(param1 == "number" && param2 == "number"){
    return param1 + param2
   }else {
     return param1.toString() + param2.toString()
   }
}

console.log(add("1","2"));
console.log(add(1,2));

// IN guard. this works only in object
type NormalTypePerson  = {
    name: string
}

type AdminUserType = {
    name: string
    role: "admin"
}

function getUser(user: NormalTypePerson|AdminUserType): string{
   if("role" in user){ //IN guard 
    return (`I am an admin and my role is ${user.role}`);
   } else {
    return("I am a normal user");
   }
}

const normalUser1: NormalTypePerson = {name: "mr kallu"}
const adminUser: AdminUserType = {name: "mr ballu", role: "admin"}

console.log(getUser(adminUser));


// Instance of guard -- class and object guard kore

class Animal3 {
    name: string
    species: string
    constructor(name: string, species: string){
        this.name = name
        this.species = species
    }

    makeSound(){
        console.log("I am making sound");
    }
}

class Dog extends Animal3 {
    constructor(name: string, species: string){
        super(name, species)
    }

    makeBark(){
        console.log("I am barking");
    }
}

class Cat extends Animal3 {
    constructor(name: string, species: string){
        super(name, species)
    }

    makeMew(){
        console.log("I am Mewing");
    }
}

// 2nd way of using guard
function isDog(animal: Animal3): animal is Dog {
    return animal instanceof Dog
}

function getAnimal(animal: Animal3){
   if(isDog(animal)){
    animal.makeBark();
   } else if(animal instanceof Cat){ // 1st way of using guard
    animal.makeMew()
   } else{
    animal.makeSound()
   }
}

const doggo = new Dog ("german bhai", "DOG") //instance of DOG Class
const catto = new Cat ("persian bhai", "CAT")

getAnimal(catto)


// Access modifiers - public, private, protected
class BankAccount {
    id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number){
        this.name = name,
        this. id = id
        this. _balance = balance
    }

    // gettter
    get balance(): number {
        return this._balance
    }

    // setter
    set deposit(amount: number) {
        this._balance = this.balance + amount
    }

    addDeposit(amount: number){
       return this._balance = this._balance + amount
    }
}

// the difference between private and protected is that while private you can only use that properties in that associate class
// protected means you can use that properties into other classes

const myaccount = new BankAccount (444, 'persian', 20)

console.log(myaccount)
myaccount.deposit = 30
myaccount.addDeposit(10)
console.log(myaccount.balance);

// static in class
class Counter {
    static counter: number = 0;
    // constructor(counter: number){
    //     this.counter = counter
    // }
    static increment(): number{
        return Counter.counter = Counter.counter + 1
    }

    static decrement(): number {
        return Counter.counter = Counter.counter - 1
    }
}

// const instance1 = new Counter()
// const instance2 = new Counter()
console.log(Counter.increment()); // 0-1
console.log(Counter.increment()); // 1-2


// Polymorphism ---- different value of method from classes

class Person2 {
    takeNap(): void{
        console.log("I am sleeping 8 hours per day");
    }
}

class Student2 extends Person2 {
    takeNap(): void {
        console.log("I am sleeping 10 hours per day");
    }
}

class Developer extends Person2 {
    takeNap(): void {
        console.log("I am sleeping 5 hours per day");
    }
}

function getNap(param: Person2){
    param.takeNap();
}

const p1 = new Person2()
const p22 = new Student2()
const p3 = new Developer()

getNap(p1)
getNap(p22)
getNap(p3)



// another example
class Shape{
    getArea(): number{
        return 0
    }
}

class Circle extends Shape{
    radius: number
    constructor(radius: number){
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number){
        super()
        this.height = height
        this.width = width
    }

    getArea(): number {
        return this.height * this.width
    }
}

function getAreaOfShape(param: Shape) {
 console.log(param.getArea());
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(10, 10))