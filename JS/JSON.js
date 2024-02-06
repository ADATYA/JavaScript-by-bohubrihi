//Topic 02: JSON Syntax

var student = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka"
};

var student_json = {
    "name" : "Rahim",
    "age"   : 22,
    "Hometown" : "Natore"
};



var student_json = JSON.stringify(student);

console.log(student_json);

var student_new = JSON.parse(student_json);
console.log(student_new); 


////Topic 03 : JSON Data Types

//Jesin can support this
//String
//Number
//Object
//array
//boolean
//null

//  XXXXXXXXXXXXXXXXXXXX ----------------------- XXXXXXXXXXXXXXXXXXXXX

//Jesin can not support this:
//Function
// Date
//undefined



var student = {
    name: "Rahim",  //string
    age: 26,   //number
    hometown: "Dhaka", 
    married : false,  //Boolean
    dob : 7-11-2002, //date
    test_null: null,//null
    test_undefiend:undefined, //undefined
    greet: function(){  //function
        console.log(`Hello ${this.name}`);
    }
};

// var student_json = JSON.stringify(student);

// console.log(student_json);

// var student_new = JSON.parse(student_json);
// console.log(student_new); 

//  XXXXXXXXXXXXXXXXXXXX ----------------------- XXXXXXXXXXXXXXXXXXXXX

// Topic 04 : Warning!:

// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

var person1 = {
    "name": "Rahim",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
};

var person2 = {
    name: "Karim",
    age: 35,
    hometown: "Chittagong",
    married: true
};

console.log(person2);
console.log(person1);