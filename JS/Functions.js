// Topic 01 : What is function in Modern JavaScript

function hello(){
    console.log("Hello Bangladesh");
    console.log("Hello India");
    console.log("Hello Germany");
}

hello()
console.log("------------")
hello()
console.log("+++++++++++++")
hello()

// Topic 02 : Function Parameters and Return Value/Argumnet

alert("Hello javascript");

// Way 1
function bna(p1){
    console.log(`Spider-Man: ${p1}`); //Backtric(``) and %{}
}

bna("Across the Spider-Verse");
bna("Spider-Universe");

//Way 2
function bna(fname,lname){
    console.log(`Spider-Man: ${fname} ${lname}`); //Backtric(``) and %{}
}

var firstname = "Bikrom";
var lastname = "Roy";

bna(firstname,lastname); 

//Way 3
function bna(fname="Bikrom",lname="Roy"){
    console.log(`Spider-Man: ${fname} ${lname}`); //Backtric(``) and %{}
}

bna(firstname,lastname)

//Mathamatic with Function

function addnum(a=0,b=0){
    console.log(a+b)
    return(a+b)

}
 addnum(4,5) 
 addnum(2.4,5.6)

console.log(addnum(4,5)) //return value answer
console.log(addnum(1.3,4.5)) //return value answer




// Topic 03: Function Expression and Arrow Function (ES6) 

// Normal function

function hello(name)
{
    console.log("Hello "+name);
}

//Function Expression

var hello1 =function(name2){
    console.log("Hello " +name2);
}


// Arrow Function(ES6)

let hello3=(name3) => {
    console.log("You are an arrow function "+name3);
}


hello("Java Script");
hello1("Spiderman");
hello3("Java Script");



//Topic 04 : Function in Array Iteration

var foods = ["somucha","puri","singara","piyagu"];
var numbers=[1,23,4,67,73];
var everything= function(item,index,array){
    console.log(`Index : ${index} and Item number: ${item}`)
    console.log(array);
};
//1st paramiter :Item
//2nd paramiter :Index
//3rd paramiter :whole Array



foods.forEach(everything);


// Array Iteration using Mapping

var foods = ["somucha","puri","singara","piyagu"];
var numbers=[1,23,4,67,73];

function addnew(item){
    return `${item} is a Food`;
}
var arr_res = foods.map(addnew);
var arr_sqr = numbers.map(function(item){
    return item*item
});




console.log(arr_res);
console.log(arr_sqr);



       // Topic 5: Object Methods


let person = {fname: "Bikrom",lname:"Roy",
DOB:"7 Nov 2002",  //number , string, data,array,object



fullname: function(){ //Method
    return `${this.fname} ${this.lname}`;
}


}

console.log(person.fname);
console.log(person.fullname())


// Topic 06 : Math and Date Objects

 // Math Object
 let val;

 val = Math.PI;
 val = Math.E;
 val = Math.round(23.5);
 val = Math.ceil(3.2);
 val = Math.floor(3.9);
 val = Math.sqrt(81);
 val = Math.abs(-56);
 val = Math.pow(2, 8);
 val = Math.min(2,3,1,0,-8);
 val = Math.max(-1,2,4,5);
 val = Math.random();
 
 val = Math.floor(Math.random() * 20 + 1);
 
 
 
 console.log(val);

 console.log("\n");

 // Date Object


let today = new Date();

val = today;
val = today.toString();

let birthday = new Date('7-11-2002 8:25:00');
birthday = new Date('November 7 2002');
birthday = new Date('7/11/2002');
val = birthday;
val = today.getMonth(); // Start from 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// timestamp -> amount of second past since Jan 1st 1970

birthday.setMonth(0);
birthday.setDate(12);
birthday.setFullYear(1996);
birthday.setHours(3);

console.log(val);
console.log(birthday);


// Topic 07: Global and Local Scope with let and const (ES6)

// Global Scope
var a = 1;
let b = 2;
const c = 3;


console.log(`Global Scope: `, a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Functions Scope: `, a, b ,c);
}

test();

console.log(`Global Scope: `, a, b, c);

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If Scope: ` , a, b, c);
}

console.log(`Global Scope: `, a, b, c);


for (let a = 0; a <10; a ++) {
    console.log(`Loop: `, a);
}


console.log(`Global Scope: `, a, b, c);