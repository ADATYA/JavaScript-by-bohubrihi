// //Topic 01:Class (ES6)
// Class is a templete for createing Object

// let person1 = {
//     fname : "Bikrom",
//     lname: "Roy",
//     DOB: "7-11-02",

//     fullname: function(){
//         console.log(`${this.fname} ${this.lname}`);
//     }

// }

// let person2 = {
//     fname : "Sporsho",
//     lname: "Singha",
//     DOB: "3-10-03",

//     fullname: function(){
//         console.log(`${this.fname} ${this.lname}`);
//     }

// }

// console.log(person1);
// console.log(person2);

// class Person{
//     constructor(fname,lname,birthday){
//         this.firstname = fname;   // this.firstname = Property   &&   fname = Property value
//         this.lastname = lname;
//         this.DateofBirth = birthday;
//     }
// //Age Calculater:

//     calculateAge(){
//         let birthday = new Date(this.DateofBirth);
//         let diff = Date.now() - birthday.getTime();
//         let ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear()-1970);
//     }

//     fullname(){
//             console.log(this.firstname,this.lastname);
//     }

// }

// //Object
// let person1 = new Person("Bireswer","Roy","6-10-1967");
// let person2 = new Person("Nomita","Roy","7-09-1977");
// let person3 = new Person("Ankita","Roy","5-8-2007");

// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge()); 

// console.log(person1.fullname());
// console.log(person2.fullname());
// console.log(person3.fullname()); 



////Topic 02: Sub-Classes 

// class Person{
//     constructor(fname,lname){
//         this.firstname = fname;
//         this.lastname = lname;

//     }
//     greeting(){
//         return `Hello ${this.firstname} ${this.lastname}`;
//     }
// }

// //Now all data from person to inharite in Customer as a sub class(father and Child)

// class Customer extends Person{
//     constructor(fname,lname,phone,msp){
//         super(fname,lname) // Transfer data from person to customer 

//         this.Phonenumber=phone;
//         this.Membersheep = msp;

//     }
// }

// //Object 

// //for Person

// let person1 = new Person("Bikrom","Roy");

// console.log(person1);
// console.log(person1.greeting());

// //for Customer

// let customer1 = new Customer("Sporsho","Shingha","121121322","3721")
// console.log(customer1);


//Topic 03: Static Function:

class Person{
    constructor(fname,lname){
        this.firstname = fname;
        this.lastname = lname;

    }
    getting(){
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }

    static test(){
        console.log("Hello I am Static");
    }
}

//Object

let person1 = new Person("Bikrom" , "Roy");

console.log(person1.getting());
console.log(Person.test());
