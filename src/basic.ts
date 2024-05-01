const course: string = ("what is next?")
console.log(course)

const tuples: [number, string] = [512, "number"]

// arrowFunction
const addNumber = (num: number, num1: number) : number => num + num1;

// normal function
function add(num: number, num1: number): number {
    return num1 + num;
}

// Object + Function
const person: {
    name: string;
    balance: number;
    addBalance(money: number): void;

} = {
    name: "Naushad",
    balance: 5,
    addBalance(money: number) {
        console.log(`My new balance is ${this.balance + money * money}`)
    }
}
person.addBalance(5)


const arr = [1,2,3]
const arrNumber = arr.map((e: number) => e)
const arrNumber2 = arr[1]

console.log(arrNumber)
console.log(arrNumber2);

// type allias
type allias = {
    name: string;
    age: number,
    balance: number;
}

const crush: allias = {
    name:"stark",
    age: 100,
    balance: 500
}

// turnary operator
const age: number = 19;
const isAdult = age> 18 ? "yes" : "no"
console.log(isAdult);
