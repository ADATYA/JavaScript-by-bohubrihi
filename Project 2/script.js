//Get the UI element
let form = document.querySelector('#book-form')
let booklist= document.querySelector('#book-list')



//Book Class

class Book{

    constructor(title,auther,isbn){
        this.title = title;
        this.auther = auther;
        this.isbn = isbn;

    }
}

// Add UI class
class UI {
    constructor(){

    }
    addToBooklist(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.auther}</td>
        <td>${book.isbn}</td>
        <td><a herf = '#' class="delete">X</a></td>`;

        list.appendChild(row);
        
        //console.log(row);
    }

    clearField(){
        document.querySelector('#title').value = ' ';
        document.querySelector('#auther').value = ' ';
        document.querySelector('#isbn').value = ' ';
    }
    showAlert(message, className){
        let div= document.createElement('div');
        div.className = `alert${className}`;

        div.appendChild(document.createTextNode(message));
        //console.log(div);
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div,form);
    
        setTimeout(() =>{

            document.querySelector('.alert').remove();
        }, 3000);
    
    }

    deleteFromBook(target){
        //console.log(target);
        if (target.hasAttribute('href')) {
            console.log(target);
            
        }

    }

}

//Add Event Listener
form.addEventListener('submit',newBook);
booklist.addEventListener('click',removeBook);





//Define Function

function newBook(e){
    let title = document.querySelector('#title').value,
    auther = document.querySelector('#auther').value,
    isbn = document.querySelector('#isbn').value;

    let ui =new UI();

    if(title ===''|| auther ===''|| isbn ===''){
        // alert("Somthing Wrong!!")
    
        ui.showAlert("Fillup all the filds :(", "error");
    }
    else{

        let book = new Book(title,auther,isbn);
        
        ui.addToBooklist(book);
        
        ui.clearField();

        ui.showAlert("Book Added Succesfully :) ", "success");

    }

   

    e.preventDefault();
}

function removeBook(e){


    let ui = new UI();
    ui.deleteFromBook(e.targat);
    ui.showAlert('Book Removed','success');
    e.preventDefault();
}