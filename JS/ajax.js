//Asynchronous Programming
//AJAX = Asynchronous JavaScrript and XML
// Get data without loading the page


document.getElementById('get_data').addEventListener('click',loadData);

function loadData(){

    //Create a XHR Object (Xml Http Request)

    // console.log("Button Clicked");

    let xhr = new XMLHttpRequest();
    
    //Open
    xhr.open('GET','data.txt',true);

    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }

    // xhr.onload = function() {
    //     //HTTP statuses
    //     //200: "OK"
    //     //403:"Forbidden"
    //     //404:"Not Found"

    //     if(this.status === 200){
    //         // console.log(this.status)
    //         // console.log(this.responseText)
    //         document.getElementById('output').innerHTML = 
    //         `<h4>${this.responseText}</h4>`
    //     }
    // }

    // Note : When it was running then all code are commented
     
    // xhr.onreadystatechange = function(){
    //     if (this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }
    
    xhr.send();
    
    //console.log(xhr);
    

}