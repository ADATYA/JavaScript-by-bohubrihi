// Define UI element

let form = document.querySelector("#task_form");
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('clear_task_button');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

// Define EventListener

form.addEventListener('submit', addTask);

//Define Function
//Add Task
function addTask(e){
    if(taskInput.value ===''){
        alert('Please enter a task !!');
    }else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        taskList.appendChild(li);
    
}
}