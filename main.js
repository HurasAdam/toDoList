//Selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click',addTodo)

//Functions

function addTodo(event){
    event.preventDefault();
    
    
    //Todo DIV
    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li
const newTodoLi= document.createElement('li')
newTodoLi.innerText='hey';
newTodoLi.classList.add('todo-item');

todoDiv.appendChild(newTodoLi);

// Check mark button
const completedButton= document.createElement('button');

completedButton.innerHTML= '<i class="fa fa-check ikon"></i>';
completedButton.classList.add('completed-btn');
todoDiv.appendChild(completedButton);
// remove mark button
const removeButton= document.createElement('button');
removeButton.innerHTML= '<li class="fas fa-trash"></i>'
removeButton.classList.add('remove-btn');
todoDiv.appendChild(removeButton);

//apend to list 

todoList.appendChild(todoDiv);
}