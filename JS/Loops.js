//Topic 01: While Loop
//Part 01
var s=1

while(s<=5){
    console.log("This is print the value: " +s);
    s++;
}
console.log("Thee final reasult of executation!!\n\n");

//-----------

var p = 20

do{
    console.log("Hello javascript loops " +p);
    p++;
}while(p <= 10);


//Topic 02: More on While Loop
//Part 02

var n=1
while(n<=10){
    if(n===3){
        console.log("Value of N is "+n);
    }
    console.log(n);
    n++;
}

console.log("The final result of N!!");

////Keep it mind : sum = 0, product = 1,

// SUM 
var b=1; 
var sum =0;  
while(b<=10){      // 1+2+3+4+5+6+7+8.....
    sum = sum + b;  // 1+2=3+3=6+4=10+5=15+6=21+7=28+8=36+9=45+10=55
    b++;
}

console.log("Sum value : " +sum);


// Product
var a=1
var product=1;
while(a<=10){
    product = product * a;
    a++;
    
}
console.log("Product value of: " +product);

//Topic 03: For Loop (Modern JavaScript Programming)

//for(initialization,condition,update or increment)



for(var t =1;t<=10;t++){ // 
    console.log("sum : "+t);
    
}
console.log("\n");

for(var r =5;r>=1;r--){ // 
    console.log("sum : "+r);
    
}

//Topic 04: Break and Continue:

//Break

for(var w=1;w<=5;w++){
    console.log("loop of : "+w);
    break;
}

for(var w=1;w<=5;w++){
    
    console.log("loop is : "+w);  // result = 1,2,3
    
    if(w == 4){
        //console.log("loop of : "+w); // result = 3
        break;
    }
    //console.log("loop is : "+w);  // result = 2
}

for(var h=1;h<=5;h++){
    console.log(h);
}

console.log("\n");

for(var h=1;h<=5;h++){
    //console.log(h); //result = 1 or all
    
    if(h==3){
        //console.log(h);//result = 3
        break;
    }
    console.log(h);//result = 2
    
}

console.log("\n");

//Topic 04: Break and Continue:

// Continue:

for(var h=1;h<=5;h++){
    console.log(h);
    continue;
}

console.log("\n");

for(var h=1;h<=5;h++){
    if(h ==4){   // 4 was skiped
        continue;
    }
    console.log(h);
}

console.log("\n");

for(var h=1;h<=10;h++){
    if(h%2==0){   // even=0
        continue;
    }
    console.log(h);
}

console.log("\n");

for(var h=1;h<=10;h++){
    if(h%2==1){   // Odd=1
        continue;
    }
    console.log(h);
}

// Topic 05: String and Array Iteration:

// Part 01: String:

var name = "Sporsho and Bikrom is good friend"
var len = name.length;

for(var a=0;a<len;a++){
    console.log(`Index : ${a}`)
    console.log(name[a]);

}


console.log("\n");

//Part 02: Array Iteration:

var food= ["Singara","Somucha","puri","Cha","Biscute"]
var len = food.length;

for(var a=0;a<=len;a++){
    console.log(`Index : ${a}`)
    console.log(food[a]);

}

// Topic 06:  For-in and For-of:

// Part 01: For-in: string/array/object

let name = "I am learning JS"
let food = ["Singara","Somucha","puri","Cha","Biscute"]
let person={
    name:"Bikrom Roy",
    age: 22,
    profession:"CSE student"
}
for(var x in name){   //Using in for index
    console.log(`index : ${x} and item ${name[x]}`);
}

for(var x of name){ //Using of for direct value
    console.log(x);
}


for(var x in person){   //Using in for index
    console.log(x);
}

console.log("\n");


// Exercise and Solution


var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum += i ** 2;
    series += (i ** 2).toString();
    if (i == n) { continue; }
    series += " + ";
}

console.log(`${series} = ${sum}`); 