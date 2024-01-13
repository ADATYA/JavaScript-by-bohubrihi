// Topic Description : 
 var x;
x = 3.141;
x = 34;
x = 123e5; // 123 * 10 ** 5
x = 123e-5; // 123 * 10 ** -5

// Numbers takes 64 bits

// + can be used for both addition and conatenation
"34" + "45" // will be string
34 + "45" // will be string
"34" + 45 // will be string
"The result is " + 34 + 45
34 + 45 + "is the result"
34 + 45 + "13"

//Numeric Strings
"25"-"5"
"25"/"5" // result 10
"25"*"5"
"25"%"5"
"25"+"5" //exception

//Infinity
var num = Infinity;
25/0 // will get Infinity


//Hexa Decimal Numbers
var x = 0xBB

x.toString() // Returns number as string

x.toString(16);

var x = 3.1416;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

var x = "123"
parseInt(x);
x = "123.45"
parseFloat(x);

isNaN(x);

                                // XXXX //


// *** Numbers ***

var s;
s = 7;
document.write(s);

var v;
v = 37.45;
document.write(v);

var p;
p = 37e3;
document.write(p);

var p;
p = 37e3;
console.log(p);

// *** String ***

var t;
t= 37+45;
console.log(t);

u="4"+"5";
console.log(u);

r="45"+"57";
console.log(r);

u="4"-"5";
console.log(u);

u="4"*"5";
console.log(u);

u="25"/"5";
console.log(u);

u="25"%"5";
console.log(u);

//It is show that the first value ie string so, next all value are also string.

o="This is show reasult:" + 25+7;
console.log(o);

y=25/0;
console.log(y);


// *** HexaDecemal

y=0xAA;
console.log(y);

y=0xBB;
console.log(y);

y=0xCC;
console.log(y);

//*** To String *** 
var n;
n= 123;
n.toString()
console.log(n);
document.write(n);


var a;
a=187;
a.toString();
console.log(a);

// Converting in Binary:
b = a.toString(2);
console.log(b);

// Converting in Octal:
o = a.toString(8);
console.log(o);

// Converting in HexaDecimal:
h = a.toString(16);
console.log(h);

// Precision  :
var p;
p=37;
a = p.toPrecision(1);
console.log(a);
a = p.toPrecision(2);
console.log(a);
a = p.toPrecision(3);
console.log(a);
a = p.toPrecision(4);
console.log(a);


// String to Number :

var c;
c = 1234;
c.toString();
y = c.toString();
console.log(y);

i = 3.1416;
t = parseInt(i);
console.log(t);

f = 8.5673;
p = parseFloat(f);
console.log(p);

// Multiple value in one function :
g = 9.7321;
g.toString();
parseFloat(g.toString());
console.log(g);

// Function > is not a number(isNaN):
var r = "weew";
isNaN(r);
console.log(r);

var u = 6;
isNaN(u);
console.log(u);