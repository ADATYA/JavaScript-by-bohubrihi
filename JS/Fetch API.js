//Topic 01: Callback Function 

setTimeout(function(){
    console.log("Hello World!");
}, 5000); 

                                    Synchronous Version

let persons = [
    {firstName: "Bikrom", lastName: "Roy"},
    {firstName: "Sporsho", lastName: "Singha"}
]

function createPerson(person) {
   setTimeout(function() {
       persons.push(person);
   }, 4000); 
}

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output').innerHTML = output;
    }, 1000);
}

                                    //Asynchronous Versoin

let persons = [
    {firstName: "Bikrom", lastName: "Roy"},
    {firstName: "Sporsho", lastName: "Singha"}
]

function createPerson(person, callback) {
   setTimeout(function() {
       persons.push(person);
       callback();
   }, 2000); 
}

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output').innerHTML = output;
    }, 500);
}

 createPerson({firstName:"Adatya", lastName: "Roy"},getPerson)
 //getPerson();



// XXXXXXXXXXXXXXXXXXXX +++++++++++++++++++++ XXXXXXXXXXXXXXXXXXXXXXXX


// Topic 02 : Promises
// .then
let persons = [
    { firstName: "Bireswer ", lastName: "Roy" },
    { firstName: "Nomita", lastName: "Roy" }
]

function createPerson(person) {
    let prom = new Promise(function (resolve, reject) {
        persons.push(person);
        let error = false;

        if (!error) {
            resolve();
        }
        else {
            reject('Error!: Something Wrong!');
        }

    });
    return prom;
}

function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({ firstName: "Ankita", lastName: "Roy" })
    .then(getPerson)
    .catch(function (err) {
        console.log(err);
    });


// XXXXXXXXXXXXXXXXXXXX +++++++++++++++++++++ XXXXXXXXXXXXXXXXXXXXXXXX


// Topic 03: Fetch API


// Fetch API Uses JavaSript Promise

document.getElementById("get_data").addEventListener('click', getData);

// xhr.open('GET', 'http://api.icndb.com/jokes/random/', true);

// Arrow Function

function getData() {
    fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(data => { console.log(data); })
        .catch(err => {console.log(err); })
} 