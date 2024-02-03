![image](https://github.com/ADATYA/JavaScript-by-bohubrihi/assets/97549431/238e5cc4-edb9-4865-9d1a-2221587d0273)
# Modern JavaScript Programming  
  ### Source : 
               - https://developer.mozilla.org/en-US/docs/Web/JavaScript
               - https://www.w3schools.com/js/default.asp
               - You-tube > https://youtu.be/PWXkYBmlbB4?si=wqAGwo0y1P0xMdAz
               - 
               
 
  ### Variables and Constants:  
     * Javascript Variables Part 1
     * Javascript Variables Part 2
     * Javascript Constants and Keywords
     
### Operator:
    1 Arithmetic Operators
    2 String Operators
    3 Comparison, Logical and Conditional Operators
    4 Assignment Operators
    5 Exercise - Operators
    6 Exercise Solution
    
### Datatype:
    1 Different Types of Data
    2 Numbers
    3 Strings
    4 Booleans
    5 Arrays Part 1
    6 Arrays Part 2
    7 Objects
    8 More on Arrays and Objects
    9 Undefined, Empty values, null, NaN
    10 Primitive and Reference Types
    
### Template Literals:
    1.Template Literals (ES6)
    
### Conditions:
    1.If Statement
    2.Nested If Statement
    3.Switch (Modern JavaScript Programming)
    4.Exercise and Solution
    
### Loops:
    1 While Loop
    2 More on While Loop  
    3For Loop
    4 Break and Continue   
    5 String and Array Iteration   
    6 For-in and For-of  
    7 Exercise and Solution

![image](https://github.com/ADATYA/JavaScript-by-bohubrihi/assets/97549431/327916d0-975e-4611-8458-5734f609cbc4)
   
### Functions:
    1 What is function 
    2 Parameters and Return Value 
    3 Function Expression and Arrow Function (ES6) 
    4 Function in Array Iteration  
    5 Object Methods    
    6 Math and Date Objects 
    7 Global and Local Scope with let and const (ES6)    
    8 JavaScript Quiz: Functions

![image](https://github.com/ADATYA/JavaScript-by-bohubrihi/assets/97549431/02678ff9-1479-4672-9942-fcd9d2a38371)

### Object Oriented Programming:
    1 JavaScript Classes (ES6)
    2 Sub-Classes 
    3 Static Function
        
### Document Object Model: 
     1 What is DOM
      2 Exploring the DOM
      3 DOM Selector (Single Element)
      4 DOM Selector (Multiple Elements)
      5 Traversing
      6 Add, Replace and Remove Elements
      7 JavaScript DOM Events
      8 More on Events
      9 JavaScript Quiz: Document Object Model

![image](https://github.com/ADATYA/JavaScript-by-bohubrihi/assets/97549431/2bcf6308-458e-4d65-9e4c-fc912116bffe)
      
ডম(DOM) বা অন্যকথায় ডকুমেন্ট অবজেক্ট মডেল(Document Object Model) হচ্ছে XML বা HTML ডকুমেন্ট এর জন্যে একটা প্রোগ্রামিং ইন্টারফেস। এখান এটা কি? এটা হচ্ছে আমাদের পেজ(HTML বা XML পেজ) কে এমনভাবে রিপ্রেজেন্ট করে যাতে এটাকে সহজেই প্রোগ্রামিং ল্যাংগুয়েজ দিয়ে মডিফাই করা যায়। আমরা আমাদের এই লেখায় বিশেষ করে HTML পেজের সাথে ডমে ইন্টার‍্যাকশন দেখবো।

আমরা যখন একটা ওয়েবপেজ HTML এ লিখি তখন এটা আমরা ব্রাউজার দিয়ে দেখতে পারি। আবার চাইলে পেজ সোর্স থেকে সরাসরি HTML কোডগুলোও দেখতে পারি। মূলত আমরা ব্রাউজারে যেটা দেখি আর পেজ সোর্সে যা দেখা যায় দুইটাই এক। কিন্তু এখানে ডম ঠিক এই ডকুমেন্টটাকেই অবজেক্ট ওরিয়েন্টেডভাবে রিপ্রেজেন্ট করে যাতে আমরা ডমের সাহায্যে এই পেজের সাথে ইন্ট্যার‍্যাক্ট করতে পারি। এখন এই ইন্টার‍্যাকশানটা একটা প্রোগ্রামিং ল্যাংগুয়েজ বা জাভাস্ক্রিপ্ট দিয়েই করা হয়। এখন ডম যেহেতু অবজেক্ট রিপ্রেজেন্টশন, তো সেখানেও আমাদের জাভাস্ক্রিপ্ট এর অন্যান্য অবজেক্ট এর মতোই প্রপার্টি, মেথড থাকে। যেগুলোর সাহায্যে আমরা আমাদের পেজের সবকিছু অ্যাক্সেস করতে পারি, প্রয়োজনে মডিফাই করতে পারি সহজেই।

এখন এই ডম একেক ব্রাউজারে একেকরকমভাবে ইমপ্লিমেন্ট করা থাকতে পারে। কিন্তু তারপরেও স্ট্যান্ডার্ড মেইন্টেইন করার জন্যে বেশীরভাগ মেজর ব্রাউজারগুলোই The W3C DOM এবং WHATWG DOM এর স্ট্যান্ডার্ড মেইন্টেইন করে। তাই যেকোনো ব্রাউজারেই একটা মেথড কাজ করলে সেটা বাকী সব ব্রাউজারে করবে কিনা সেটা যাচাই করে নেওয়া ভালো। তবে আমি আমার এই লেখায় স্ট্যান্ডার্ড মেইন্টেইন করেই।

আপনি হয়তো শুনে থাকবেন জাভাস্ক্রিপ্ট দিয়ে একটা HTML পেজকে ডায়নামিক করা যায়। এখানে ডম যেহেতু আমাদের পেজের সাথে কাজ করার জন্যে মেথড অ্যাড করে দেয়, তাই আমরা সহজেই চাইলে একটা HTML পেজের উপর কিছু কাজ করতে পারিঃ

![image](https://github.com/ADATYA/JavaScript-by-bohubrihi/assets/97549431/48815106-c156-471e-a904-e86551c9dcae)


নতুন ইলিমেন্ট তৈরী করা
আগের কোনো ইলিমেন্ট রিমুভ করা
আগের কোনো ইলিমেন্ট মডিফাই করা
অ্যাট্রিবিউটস মডিফাই করা, অ্যাড করা, রিমুভ করা
স্টাইলিং অ্যাড করা, রিমুভ করা, মডিফাই করা
পেজে ইভেন্ট তৈরী করা, যে এরকম কোনো কিছু ঘটলে পেজের উপর একটা নির্দিষ্ট অ্যাকশন পারফর্ম করা
নির্দিষ্ট কোনো ইলিমেন্ট এর উপর ইভেন্ট তৈরী করা, যে এই ইলিমেন্ট এর উপর এমন কিছু ঘটলে আমরা অমুক অ্যাকশন নিতে চাই।
জাভস্ক্রিপ্ট এ ডম ম্যানিপুলেশনের জন্যে জেকোয়েরী লাইব্রেরী অনেক ব্যবহৃত হয়ে থাকে। জেকোয়েরীর কাজ হচ্ছে জাভাস্ক্রিপ্ট এর বিল্ট-ইন ডম ম্যানিপুলেশনের মেথড আর প্রপার্টিগুলো যাতে আরো সহজে, ছোটো করে মনে রাখা যায় এমন কিছু মেথড অ্যাড করা।

আপনাকে জেকোয়েরী ব্যবহার করতে হবে নাঃ জেকোয়েরী দিয়ে যে কাজটা আপনি করবেন, সেইম কাজটাই আপনি পিউর জাভাস্ক্রিপ্ট দিয়েও করতে পারবেন। আর আমাদের বেশীরভাগ ক্ষেত্রেই তত বেশী কাজ করতে হয় না ডম ম্যানিপুলেশনে, সেক্ষেত্রে জেকোয়ীর মতো হিউজ একটা লাইব্রেরী মাত্র দুই একটা মেথড আর সুবিধার জন্যে অ্যাড না করাই ভালো। কারণ ক্লাইন্ট-সাইডে এক-দুই কেবি বেশী ফাইল সাইজও আপনার টোটাল সাইটের পারফর্মেন্সের উপর প্রভাব ফেলতে পারে। সেখানে জেকোয়েরী মোটামোটি অনেক বড় একটা লাইব্রেরী। তাই জেকোয়েরী অ্যাড না করে আপনি পিউর জাভাস্ক্রিপ্ট দিয়েই কাজ সেরে ফেলতে পারবেন। যেমন এই ওয়েবসাইটে জেকোয়েরীর বিভিন্ন মেথডের বিপরীতে পিউর জাভাস্ক্রিপ্ট দিয়ে কিভাবে সেইম কাজটা করবেন সেগুলোর একটা লিস্ট দেওয়া আছে।

বিশেষ নোটঃ নোড জেএস এ যেহেতু এরকম পেজ বা ডকুমেন্ট এর কোনো ব্যাপার নাই, তাই নোড জেএস ডম পাবেন না। এটা শুধুমাত্র আপনার ব্রাউজারেই অ্যাক্সেস পাবেন। তাই এই সিরিজের সব লেখা শুধুমাত্র ব্রাউজার স্পেসেফিক। [ref.Zonayed Ahmed]


### Error Handling:
    1 Error Handling
    
### Regular Expression:
    1 Introduction to Regular expressions
    2 sLiteral and Meta Characters 
    3 Character Sets, Quantifier and Grouping
    4 Shorthand Characters and Assertions  
    5 Some Examples
    
### JavaScript Object Notation (JSON):
     1 JSON Intro    
     2 JSON Syntax
     3 JSON Data Types   
     4  Warning!
     5 JSON Objects and Array
     
### AJAX:
    1 AJAX Intro
    2 Data From External Server
    
### Fetch API:
    1 Callback Function
    2 JavaScript Promises
    3 Fetch API
    
### Leveling Up to ES6:
        1 JavaScript ES6
        2 var, let, const
        3 Arrow Function (ES6)
        4 Template Literals
        5 Array Destructuring
        6 Swapping
        7 Object Destructuring
        8 Spread Operator
        9 Spread Operator with function Parameters
        10 Rest Operator
        11 Before ES6 Classes
        12 Symbols
        13 Iterators and Generators
        14 Promises
        15 Async Await
        16 Sets
        17 Maps
        
### JavaScript Assignments:
     1 Developing A shopping Cart Using JavaScript     
     2 Making An Expression Validation App Using JavaScript 
     3 Making a Number Guesser Game Using JavaScript
     
### Full Stack Web Development:
    1.What's Next: JavaScript Libraries & Frameworks
