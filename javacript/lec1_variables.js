console.log("!......HELLO WORLD....!!!")// console.log is used for display our desired output.
// In JavaScript, variables are used to store data values. You can declare variables using the `var`, `let`, or `const` keywords. Here’s a quick overview of each:

// var:
// - Scope: Function scope. Variables declared with `var` are available throughout the function in which they are declared.
// - Hoisting: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.


function example() {
    console.log(x); // undefined
    var x = 10;
    console.log(x); // 10
}

// let:
// - Scope: Block scope. Variables declared with `let` are only available within the block in which they are declared.
// - Hoisting: Variables declared with `let` are hoisted but not initialized, meaning you cannot access them before the declaration in the code.

{
    let y = 20;
    console.log(y); // 20
}
console.log(y); // ReferenceError: y is not defined

// const:
// - Scope: Block scope. Variables declared with `const` are only available within the block in which they are declared.
// - Hoisting: Variables declared with `const` are hoisted but not initialized, meaning you cannot access them before the declaration in the code.
// - Immutability: Variables declared with `const` cannot be reassigned.

const z = 30;
console.log(z); // 30
z = 40; // TypeError: Assignment to constant variable.

// Variable Declaration Examples

var example
var a = 10;
console.log(a); // 10

// let example
let b = 20;
console.log(b); // 20

// const example
const c = 30;
console.log(c); // 30

// const with objects
const person = {
    name: "John",
    age: 25
};
console.log(person.name); // John
// You can change properties of an object declared with const
person.age = 26;
console.log(person.age); // 26
// But you cannot reassign the entire object

person = {}; // TypeError: Assignment to constant variable.
