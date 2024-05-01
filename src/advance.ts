// Type Assertion
function kgToGram(x: number | string): Number | String | undefined {
   if(typeof x == "string"){
    const value = parseFloat(x) * 1000
    return `the value is ${value}`
   }
   else if (typeof x == 'number') {
    const value = x* 1000
    return `the value is  ${value}`
   }
}

const answer = <Number>kgToGram(1000) //type assertion
const answer2 = kgToGram('2000') as String //type assertion
// console.log(answer)
// console.log(answer2)

// interface
interface IUser {
    name: string,
    age: number,
}

const user: IUser = {
    name: "Hali",
    age: 25,
}

interface IArray {
    [index: number]: string
}

const array: IArray = ["1", "2"]

// type
type iuser = {
    name: string,
    age: number
}

const typeUser: iuser = {
    name: "14",
    age: 5
}

type Fun = (x:number, y:number) => number
const func:Fun=(x,y)=> x+y


// Generic in type
function genericT<T , U>(param1: T, param2: U): number {
    if (typeof param1 == 'string'){
       const val1 = parseInt(param1)
       return val1 + param2
    }
    else {
        return [param1 + param2]
    }
}


const val = genericT<number, number>(5, 7)
// console.log(val)


interface crush21<T, U=null> {
   name: string,
   husband: T,
   wife?: U
}

const crushGeneric: crush21<string> = {
    name: 'Nasa',
    husband: "yes"
}

// console.log(crushGeneric);

const crushGeneric2: crush21<boolean, string> = {
    name: 'yellow',
    husband: false,
    wife: "yes"
}

// console.log(crushGeneric);
// console.log(crushGeneric2);

interface crushInterface<T, U> {
    name: string,
    husband: T,
    wife?: U
}

const crush4: crushInterface<{name: string, age: number}, {name: string, age: number}>= {
    name: "Anamika",
    husband: {
        name: "Naushad",
        age: 30
    },
    wife: {
        name: "anamika",
        age: 20
    }
}

// console.log(crush4.husband.name);

// generic in function
const printF = <X,Y>(param1: X, param2: Y): [X,Y] => {
    return [param1, param2]
}

const printValue = printF<string, {name: boolean, gender: string[]}>("Naushad", {name: true, gender: ["1",'2']})
// console.log(printValue);


const printF2 = <X,Y>(param1: X, param2: Y): [X,Y] => {
    return [param1, param2]
}

type p2 = {
    name: boolean,
    gender: string[]
} 

const printValue2 = printF<string, p2>("Naushad", {name: true, gender: ['2','1']})
// console.log(printValue2);

// using spread operator and generic at the same time and constraints
interface mandatory {
    name: string,
    age: number
}
const addMyCrush= <T extends mandatory>(myInfo: T) => {  //T extends mandatory interface this is the constraints
    const herName = "sharmila"
    const newData = {...myInfo, herName}
    return newData
}

const myInfo = {
    name: "Naushad",
    age: 25
}

const addMe = addMyCrush(myInfo)
// console.log(addMe.age);

// generic keyof constraints [force one generic type on another generic type]
type genericKeyofCon = {
    name: string,
    age: number,
    available: boolean
}

type newType = keyof genericKeyofCon
const a: newType = "name"

function genericKeyofConstraints<X, Y extends keyof X>(obj: X, key: Y ) {  // when Y extends it means the key of X is forced on Y
    return obj[key]
}

const gkc = genericKeyofConstraints({name: "lal", age: 50}, "name")
console.log(gkc);

// Asynchronous TypeScript
interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
const getTodo = async(): Promise<ITodo>=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return await response.json()
}

const getTodoData = async (): Promise<void> => {
    const result = await getTodo()
    console.log(result);
}

getTodoData();

const makePromise = (): Promise<string>=> {
   return new Promise<string>((resolve, reject)=> {
    const data: string = "Data is fetched"
    if(data){
        resolve(data)
    } else {
        reject("Failed to feted data!")
    }
   });
};