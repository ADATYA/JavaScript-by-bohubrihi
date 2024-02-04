////Topic 02: Exploring the DOM

// let val;

// val = this;
// val = window;
// val = window.document;
// val = document;
// val = document.all;     // Show all the value
// val = document.all[4];  // Show the html tags,like: head,meta,link

// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].href;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].getAttribute('src');

// links = document.links;
// let linkArr = Array.from(links);

// linkArr.forEach(function(link){
//     console.log(link.getAttribute('href'));
// });

// console.log(links);
// console.log(val);



// // Topic 03 : DOM Selector (Single Element)

// let val;


// // Getting an Element:

// val = document.getElementById('document-title');

// // val = document.getElementById('document-title').id;

// val = document.getElementById('document-title');

// //val = document.getElementById('document-title').className;


// //            ---------------- XXXXXXXXXXX ----------------


// //Changing Element:

// document.getElementById("document-title").style.background="red";

// document.getElementById("document-title").style.color="yellow";

// document.getElementById("document-title").style.padding="10px";

// document.getElementById("document-title").style.display="block"

// document.getElementById("document-title").style.textAlign="center";


// //            ---------------- XXXXXXXXXXX ----------------


// //Changing Content:

// document.getElementById("document-title").textContent="New Title";

// document.getElementById("document-title").innerText= "Again New Title";

// document.getElementById("document-title").innerHTML= "<i>Again New Title<i>";

// val = document.getElementById("document-title");

// val.innerText="Hello JS"; // If I bored to type many line then using to variable to minimize my data


// //            ---------------- XXXXXXXXXXX ----------------



// // Document querySelector(): [calling data by name,id,class]

// val = document.querySelector('#document-title'); // Id(#)

// val = document.querySelector('.title-class');  // class(.)

// val = document.querySelector('h3');

// val = document.querySelector('ol');

// val = document.querySelector('ol li');

// val = document.querySelector('ul');

// val = document.querySelector('ol li');

// val.style.background ='red';
// val.style.color = 'black';

// val = document.querySelector("li:last-child");
// val = document.querySelector("li:nth-child(3)");

// document.querySelector('li:nth-child(3)').innerText = "Hello World";

// document.querySelector('li:nth-child(even)')//.innerText = "Hello World";

// document.querySelector('li:nth-child(odd)')//.innerText = "Hello World";

// console.log(val);


//Topic 04: DOM Selector (Multiple Elements):


//document.getElementsByClassName();

// let list= document.getElementsByClassName('sample-class');

// list[0].style.background = "red";
// list[0].style.color = "white";
// list[0].style.padding = "10px";
// list[0].textContent = "I love my family";
// list[0].style.textAlign = "center";

// console.log(list[0]);


// // //            ---------------- XXXXXXXXXXX ----------------

// //document.getElementsByTagName();

// list=document.getElementsByTagName('li');
// //console.log(list[6]);

// list=document.querySelector('ol').
// getElementsByTagName('li');

// let lis = Array.from(list); // forEach are not working if I convert list in a single Array...
// lis.forEach(function(item){
//     //console.log(item);

// });
// console.log(list);


// //            ---------------- XXXXXXXXXXX ----------------

// //document.quearySelectorAll();

// list = document.querySelectorAll(".sample-class");

// list = document.querySelectorAll("li");

// list = document.querySelectorAll("ol li");

// let oddlist = document.querySelectorAll("li:nth-child(odd)");

// oddlist.forEach(function(item){
//     item.style.background = 'green';
// });

// let evenlist = document.querySelectorAll("li:nth-child(even)");


// evenlist.forEach(function(item){
//     item.style.background = 'blue';
//     item.style.color='white';
// });

// console.log(list);



///Topic 05: Traversing

let val;
let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:first-child');

val = list;
val = listItem;

// Get Child Nodes
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype
val = list.childNodes;

val = list.children;
val = list.children[1];
list.children[0].textContent = "Hello";
val = list.children[1].children[0];
val = list.children[1].children[0].href;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

val = document.querySelector('ul li:last-child');
val = val.previousSibling;
val = val.previousElementSibling;

console.log(val);

//Topic 06:  Add, Replace and Remove Elements:

// Adding Element to DOM
// Create Element
let olItem = document.createElement('li');

// Add Id and Class
olItem.className = "a new another-class";
olItem.id = "new-element";

// Add Attribute
olItem.setAttribute('title', 'A title to new Element');

olItem.appendChild(document.createTextNode('JavaScript'));
document.querySelector('ol').appendChild(olItem);
//console.log(olItem);

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://www.instagram.com');

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);

// Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));
newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');
//parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);


console.log(newHeading);
console.log(oldHeading);
console.log(parent);


// Remove element

let lis = document.querySelectorAll('li');
//let list = document.querySelector('ul'); //already decleared

lis[0].remove();
list.removeChild(lis[7]);

//
list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("test-new");
//let val = list.hasAttribute('title'); // val already decleared
val = list.hasAttribute("class");
list.setAttribute("title", "Yes")
list.removeAttribute("title");
console.log(list);

//console.log(link); 


