//Error Handling:

//try and catch

console.log("Before Result");

try{

    test();

}catch(a){
        console.log(a);
        console.log(a.message);
        console.log(a.name);
}

console.log("After Result");


try{

    undefined.test();

}catch(b){
    console.log(b.message);
    console.log(b.name);
}finally{
    console.log("I am Finally end now");
}

let s= 3;
try{
    if(s>=15) throw "Too Big";
    else if(s<5) throw "Too  small";

}catch(error){
    console.log(error);

}finally{
    console.log("It is finally and print at lass without any trubble");
}