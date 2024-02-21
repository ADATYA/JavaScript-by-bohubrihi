//var, let, const
// Global Scope
var a = 1;
let b = 2;
const c = 3;


console.log(`Global Scope: `, a, b, c);

//Function Scope

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Functions Scope: `, a, b ,c);
}

test();

console.log(`Global Scope: `, a, b, c);

//IF Scope

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If Scope: ` , a, b, c);
}

console.log(`Global Scope: `, a, b, c);

//For loop scope

for (let a = 0; a <10; a ++) {
    console.log(`Loop: `, a);
}


console.log(`Global Scope: `, a, b, c); 

// XXXXXX 000000 XXXX

// Arrow Function (ES6)

// Normal Declaration
function saySomething(name) {
    console.log('Hello ' + name);
}

// Function Expression

let saySomething1 = function(name2) {
    console.log('Hello ' + name2);
}

// Arrow Function (ES6)

let saySomething2 = (name3) => {
    console.log("I am " + name3);
}




saySomething("Bohubrihi");
saySomething1("Bikrom");
saySomething2("JavaScript"); 

// XXXXXX 000000 XXXX

// Template Literals

// Template literals (ES6)
// Backtick ``
let name = "Rahim";
let age = "38";
let dob = "21 June, 1983";

console.log(`His name is ${name}
His age is ${age}
Date of Birth ${dob}`);

let e = 34
let d = 67
console.log(`${e} + ${d} = ${ e + d }`); 


// Array Destructuring

let frouits= ["Mango","Lichi","Banana"] 

let [f1,,f3]=frouits

 
console.log(f1,f3);

// XXXXXX 000000 XXXX

// Swap Variables

let f, g;
f = 8; g= 20;

// let temp = a;
// a = b;
// b = temp;

[f, g] = [g, f];


console.log(`F = ${f} and G = ${g}`);

// XXXXXX 000000 XXXX

// Object Destructing

let person = {
    firstName: "Bikrom",
    lastName: "Roy",
    dob: '07-11-2002'
}

// let fname = person.firstName,
// lname = person.lastName,
// dob = person.dob;
//let { firstName : fname, lastName, dob } = person;
//console.log(fname, lastName, dob);


function display({ firstName, lastName, dob }) {
    console.log(firstName, lastName, dob);
}

display(person); 



// XXXXXX 000000 XXXX

// Spread Operator

// Spread Operator ...
let str = "Bohubrihi";
let newStr = [...str];

//console.log(newStr);

let fruit1 = ["Apple", "Pine-apple", "Mango"];
let fruit2 = ["Orange", "Grape"];
let newFruit = "Jackfruit";

let newArr = [...fruit1, newFruit, ...fruit2];

//console.log(newArr);
// Spread on Object (ES8)
let person1= {
    fname: "Bikrom",
    lname: "Roy"
}

let newPerson = {...person1, dob: '07-11-2002'}
console.log(newPerson);

// XXXXXX 000000 XXXX

// Spread Operator with function Parameters

// Spread Operator ...

let numbers = [23, 1, 0, -1];

//console.log(Math.max(...numbers));

let person2 = ["Simanta", "Paul"]

let test1 = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

test1(...person2); 


// XXXXXX 000000 XXXX

// Rest Operator

// Rest Operator ...

let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second, ...third] = fruits

// console.log(first);
// console.log(second);
// console.log(third);

let person3 = {
    fname: "Sporsho",
    lname: "Singha",
    dob: "3-10-2002"
}

let {fname, ...lname} = person3

// console.log(fname);
// console.log(lname);

let moreNum = [78,1,2,5,6];

let test2 =(name, ...numbers) => { // Rest
    console.log(name);
    console.log(numbers);
}

test2("Sporsho", 67,3,3);
test2("Sporsho", ...moreNum); // Spread 



// XXXXXX 000000 XXXX

// Before ES6 Classes

// Promises
// An alternative to Callback

let applyDiscount = new Promise((resolve, reject) => {
    let discount = false;
    if (discount) {
        resolve('Discount Applied');
    } else {
        reject('Discount Failed!');
    }
});

applyDiscount
    .then(result => {
        console.log(result);
    })
    .catch(result => {
        console.log(result);
    })

//console.log(applyDiscount);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 


// XXXXXX 000000 XXXX

// Symbols  (Unique value)

// Symbols
// let a = Symbol()

// let person = {
//     name: "Ankita",
//     age: 18,
//     [a]: "Hello World!"
// }


// console.log(person);
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person));
// console.log(Object.keys(person));
// console.log(JSON.stringify(person));


// for (x in person) {
//     console.log(x);

// }

let sym1 = Symbol("Hello");
let sym2 = Symbol("Hello");

console.log(sym1 == sym2);
console.log(sym1);


// XXXXXX 000000 XXXX

// Iterators and Generators

// Iterator
let iterable = "Hello";
iterable = [1,2,3,4,5,5];
// Symbol.iterator
let iter = iterable[Symbol.iterator]();

let names = ["Bireswer","Namita","Ankita","Sporsho"];

console.log(iter);

console.log(iter.next());
console.log(iter.next());

console.log("Other Codes...");

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// Custom Iterator
function customIterator(arr) {
    let i = 0;

    return {
        next: function() {
            return i < arr.length ? { value: arr[i++], done: false} : { value: undefined, done: true };
        }
    };
}

let members = customIterator(names);

console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);
console.log("Random codes...");
console.log(members.next());
console.log(members.next());



// Generators

function* genFunction() {
    console.log("I am some code");
    yield 1;
    return;
    console.log("I am some code");
    console.log("I am some code");
    console.log("I am some code");
    yield "Namita";
    yield 4;
    yield "Roy";
    yield "Hello World";
}

let iter1 = genFunction();

console.log(iter1.next().value);
console.log(iter1.next().value); 



// XXXXXX 000000 XXXX

// Promises
// Successful -> resolve
// Failed -> reject
let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 1 + 3;
        if (a == 2) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    }, 4000);
})
// .then .catch
prom.then((message) => {
    console.log("I am from then " + message);
}).catch((message) => {
    console.log("I am from catch " + message);
})


console.log("I am after Promise");

// Example : Image File 


// XXXXXX 000000 XXXX

// Async Await

// fetch('http://api.icndb.com/jokes/random/5000')
    // .then(response => response.json())
    // .then(data => { });


// async await

async function getJokes() {
    let response = await fetch('https://www.countryliving.com/life/entertainment/a36178514/hilariously-funny-jokes/5000');
    let data = await response.json();
    return data;
}


getJokes().then(jokes => console.log(jokes)); 

// XXXXXX 000000 XXXX

// Set
let mySet = new Set([1, 2, 2, 4, 4]);

// Add
mySet.add("Hello");
mySet.add(2);
// Delete
mySet.delete(4);

// Check
//console.log(mySet.has(4));
// Size
//console.log(mySet.size);

// Iterating Sets

// for (x of mySet.values()) {
//     console.log(x);
// }

// let iter = mySet.entries();

// console.log(iter.next());

// console.log(iter.next());

// console.log(iter.next());

// for (let [x] of mySet.entries()) {
//     console.log(x);
// }

let iter2 = [...mySet.values()];

//console.log(iter);

mySet.forEach(value => console.log(value));

// XXXXXX 000000 XXXX

// Maps
let myMap = new Map(
    [
        ['first key', 10],
        ['second key', 'Bohubrihi']
    ]
);

// Add
myMap.set('third key', 'Hello Wolrd!');

//console.log(myMap.get('second key'));
//console.log(myMap.has('key'));
//console.log(myMap.size);

// Iterate

// for (let x of myMap) {
//     console.log(x);
// }

// for (let [x,y] of myMap) {
//     console.log(x, y);

// }

// for (let x of myMap.keys()) {
//     console.log(x);
// }

// for (let x of myMap.values()) {
//     console.log(x);
// }

// for (let x of myMap.entries()) {
//     console.log(x);
// }

// myMap.forEach((x, y) => {
//     console.log(x,y);

// })
//let arr = Array.from(myMap);
//let arr = Array.from(myMap.keys());
let arr = Array.from(myMap.values());
console.log(arr);