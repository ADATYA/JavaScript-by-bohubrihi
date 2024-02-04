//  Topic 07: JavaScript DOM Events

// function message() {
//     console.log("Mouse over button");
// }



//Event Lestener:

//let btn = document.getElementById("sample-button")

document.getElementById("sample-button").addEventListener('click',message);

document.querySelector(".container").addEventListener('mouseover',message);

document.querySelector(".container").style.background = "red";

function message(e){
    //console.log("Button Clicked");
    let val = e;
    
    val= e.target;

    val = e.target.id;

    val = e.timeStamp;

    val = e.type;

    val = e.clientY;
    val = e.clientX;

    val = e.offsetY;
    val = e.offsetX  ;

    //console.log(val);
    console.log(e.offsetX);
    console.log(e.offsetY);
}
//console.log(btn);