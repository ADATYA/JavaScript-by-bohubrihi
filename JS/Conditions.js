 //Topic 01 : If Statement in condition
 
 // Part 01 : If Statement

 if (true){
    console.log("This is If statement for execution")
 }

 console.log("This is final result")


// Part 02 : Else Statement

  if (false){
    console.log("This is If statement for execution");
 } else {
     console.log("This is Else statement for execution");
  }

   console.log("This is final result")

// Part 03 :If,Else-If,Else Statement Both:

var age = prompt()

if(age >=50){
    console.log("He/She is Old man/woman");
}
else if(age < 50 && age >= 30){
    console.log("He/She is younger man/woman");
}
else if(age < 30 && age >= 18){
    console.log("He/She is tenager man/woman");
}
else{
    console.log("under 18 or under tenager")
}
console.log("End of this programe")

// practice

let a=prompt()

if(a >=80){
    console.log("A+ or 4.00");
}
else if(a <79 && a>=75){
    console.log("A or 3.75");
}
else if(a <74 && a>=70){
    console.log("A- or 3.50");
}
else if(a <69 && a>=65){
    console.log("B+ or 3.25");
}
else if(a <64 && a>=60){
    console.log("B or 3.00");
}
else if(a <59 && a>=55){
    console.log("B- or 2.75");
}
else if(a <54 && a>=50){
    console.log("C+ or 2.50");
}
else if(a <49 && a>=45){
    console.log("C or 2.25");
}
else if(a <44 && a>=40){
    console.log("D or 2.00");
}
else{
    console.log("F or 0.00");
}




                                           // Topic 02: Nested If Statement
                                        
//part 01  : 

var n1 = prompt("Enter First Number:");
var n2 = prompt("Enter Second Number:");
var n3 = prompt("Enter Third Number:");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1 >= n2 && n1 >= n3){
    console.log(n1 +" this is lergest number");
}
else if(n2 >= n1 && n2 >= n3){
    console.log(n2 +" this is lergest number");
}
else{
    console.log(n3 +" this is lergest number");
}

if(n1 >n2){
    if(n1>=n3){
        console.log(n1 +"Lergest number!");
    }
    else{
    console.log(n3 + "Lergest number!");
    }
} else{
    if(n2 >=n3){
        console.log(n2 + "Lergest number!");
    }
    else{
        console.log(n3 + "Lergest number!");
    }
    
}




                                                        // Topic 3 : Switch 

console.log("Select an option:\na.Option 1 \nb.Option 2 \nc.Option 3");

a = prompt();

var text;
switch(a){
        case "a":
            text = "Option 1 selected!"
            break;
        case "b":
            text = "Option 2 selected!"
            break;
        case "c":
            text = "Option 3 selected!"
            break;
        default :
            text= "No option was selected!"
            break;
}

console.log(text);

                                                    //  Topic: 04: Exercise

//Exercise: 01 

var number = prompt("What is your number?");
number = parseInt(number);
var grade;

if ( number <= 100 && number >= 80 ) {
    grade = "A+";
} else if ( number < 80 && number >= 70 ) {
    grade = "A";
} else if ( number < 70 && number >= 60 ) {
    grade = "A-";
} else if ( number < 60 && number >= 50 ) {
    grade = "B";
} else if ( number < 50 && number >= 40 ) {
    grade = "C";
} else if ( number < 40 && number >= 33 ) {
    grade = "D";
} else if ( number < 30 && number >= 0 ) {
    grade = "F";
} else {
    grade = "Invalid Input!";
}

console.log("Your Grade: " + grade); 



//Exercise: 02 

console.log("Select an Option: n1. Add n2. Subtractn3. Mulitply n4. Divide");

var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose an operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input!");
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) {
        console.log("No Result!");
    }
    else {
        console.log("Result: " + result);
    }
} 