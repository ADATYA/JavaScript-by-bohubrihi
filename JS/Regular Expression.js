//Topic 01: Introduction to Regular expressions

let re;
re=/Hello Reguler Expreatation/;  // reguler exp = /../ 
re = /Hello Bangladesh/
re = /hello bangladesh/i;  // i =case insensitive


console.log(re.source); // source use for show the value 
console.log(re);


let str;
str = "Hello Bangladesh"
str = " Again Hello Bangladesh"
str = "Hell Bangladesh"
str = "aasasa Hello Bangladesh qweqweqw"
str = "Again Hello Bangladesh Hello"
str = "hello"


//exec() = Reasult in an array or null (Executstion)
let result = re.exec(str)


// test() = true/false
result=re.test(str)


//match() = Reasult in an array or null
str = "Again Hello Bangladesh Hello"

result = str.match(re)  // match e string age bode then result


// search() - Returns index of the first match or -1
str = "World"
result = str.search(re)


// replace() - Return new string

str = "Again Hello Bangladesh Hello"

let newstr = str.replace(re,"there")


console.log(result);
console.log(str);
console.log(re.source);
console.log(newstr);


//Topic 02: Literal and Meta Characters

let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping

str = "Again hello World";
str = "hello hello";
str = "hello";
str = "hallo";
str = "hillo";
str = "h llo";
str = "hllo";
str = "hillo worlde";
str = "hello worlde";
str = "hillo";
str = "hilo";
str = "hhfsdhfsuillo";
str = "hello";
str = "hllo";
str = "hallo";
str = "htllo";
str = "heallo";
str = "hello";
str = "hallo";
str = "hllo";
str = "hello";
str = "hello?";



console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
} 

//  //Topic 03: Character Sets, Quantifier and Grouping

let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping

// Character Set using Brackets []
re = /h[eai]llo/; // Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/; // Anything except those inside brackets
re = /^[ha]ello/; // Must start with h or a
re = /[A-Z]ello/; // Start with Uper Case
re = /^[A-Z]/; // First Letter must be upper case
re = /^[a-z]/;
re = /[A-Za-z]ello/;
re = /[0-9]ello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/; // Not digit
re = /^[0-9][0-9][0-9]ello/; // three digits
re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits

// Braces {} - Quantifier
re = /el{2}o/; // Must occur exactly 2 times
re = /el{3}o/; 
re = /hel{2,5}o/; // Range
re = /hel{2,}o/; // At least 2 times

// Parentheses () - Grouping
re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
re = /^([0-9]xy){4}/;

// Bangladeshi Phone Number
// total 11 digits
re = /^01[0-9]{9}$/;
re = /^+8801[0-9]{9}$/;


str = "2xy3xy7xy8xy";
str = "01788888888";
str = "+8801811888889";







console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
} 

 //Topic 04: Shorthand Characters and Assertions

 let re;
 let str;
 // Literal Character
 re = /hello/;
 re = /hello/i;
 re = /hell/i;
 re = /lo W/i;
 re = /loW/i;
 
 // Meta Characters
 re = /^hello/; // Must start with
 re = /hello$/; // Must end with
 re = /world$/;
 re = /^hello$/; // Must start and end with
 re = /^h.llo$/; // Matches any one character
 re = /h.llo/;
 re = /h*llo/; // 0 or more times
 re = /he?a?llo/; // Optional
 re = /hello?/; // escaping
 
 // Character Set using Brackets []
 re = /h[eai]llo/; // Must be one of them inside brackets
 re = /[HA]ello/i;
 re = /[^ha]ello/; // Anything except those inside brackets
 re = /^[ha]ello/; // Must start with h or a
 re = /[A-Z]ello/; // Start with Uper Case
 re = /^[A-Z]/; // First Letter must be upper case
 re = /^[a-z]/;
 re = /[A-Za-z]ello/;
 re = /[0-9]ello/;
 re = /^[0-9]ello/;
 re = /[^0-9]ello/; // Not digit
 re = /^[0-9][0-9][0-9]ello/; // three digits
 re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
 
 // Braces {} - Quantifier
 re = /el{2}o/; // Must occur exactly 2 times
 re = /el{3}o/; 
 re = /hel{2,5}o/; // Range
 re = /hel{2,}o/; // At least 2 times
 
 // Parentheses () - Grouping
 re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
 re = /^([0-9]xy){4}/;
 
 // Bangladeshi Phone Number
 // total 11 digits
 re = /^01[0-9]{9}$/;
 re = /^+8801[0-9]{9}$/;
 
 // Shorthand Character Classes
 re = /w/; // Word Character - alpha numeric or _
 re = /w+/; // One or more
 re = /W/; // Non Word Character
 re = /W+/; // one or more
 re = /d/; // Digit
 re = /d+/;
 re = /D/; // Non digit
 re = /s/; // Match white space
 re = /S/; // Match non white space
 re = /Hellob/; // Word Boundary
 re = /bHellob/;
 
 // Assertions
 re = /x(?=yz)/; // Matches x only if x is before y
 re = /x(?!yz)/;
 
 
 str = "fsdfxyzfdsf";
 
 
 console.log(re.exec(str));
 reTest(re, str);
 function reTest(re, str) {
     if(re.test(str)) {
         console.log(`'${str}' matches '${re.source}'`);
     }
     else {
         console.log(`'${str}' doesn't match '${re.source}'`);
     }
 } 


 
 //Topic 05: Some Examples

 // Examples
let re;
let str;

// Postal Code
// 4700, 4000
re = /^[0-9]{4}$/;
str = "4000";

// Phone Number
// 01717888888 +8801717888888 8801717888888
re = /^(+)?(88)?01[0-9]{9}$/;
str = "+8801717888888";

// Email Address
// bohubrihi8.learn@edu.com.bd
re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
str = "bohubrihi.learn@edu.com.bd" ;

console.log(re.test(str)); 