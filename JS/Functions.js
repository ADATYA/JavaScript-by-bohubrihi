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