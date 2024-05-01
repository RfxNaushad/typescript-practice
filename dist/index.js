"use strict";
const course = ("what is next?");
console.log(course);
const tuples = [512, "number"];
// arrowFunction
const addNumber = (num, num1) => num + num1;
// normal function
function add(num, num1) {
    return num1 + num;
}
// object + function
const person = {
    name: "Naushad",
    balance: 5,
    addBalance(money) {
        console.log(`My new balance is ${this.balance * this.balance}`);
    }
};
