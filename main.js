const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");
const inputField = document.querySelector(".inputField");
const wrapper = document.querySelector(".wrapper");
const checkedTasks = document.querySelector(".checkedTasks");
const newDivArr = [];
const arr = [];                 

let counter2 = 0;
const choice = document.querySelector("#choice");
//making new div and li wih classes and pushing both into div-wrapper
addButton.addEventListener("click", createTask)
  

function createTask(){

const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "div" + arr.length);
  wrapper.appendChild(newDiv);
  if(arr.length>7){
   
   alert('Task Board is full');
   return;
    
  }
  if (arr.length % 2 === 0) {
    newDiv.classList.add("rotateRight");
  } else {
    newDiv.classList.add("rotateLeft");
  }
  const toDoList = document.createElement("span");
  toDoList.classList.add("Rotate");
  toDoList.setAttribute("id", arr.length);
  newDiv.appendChild(toDoList);
  
  toDoList.addEventListener('click',function(e){
    const item= e.target;
    item.setAttribute('contentEditable',true);
  })
  

  toDoList.innerHTML = inputField.value;
  const checkedButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  checkedButton.classList.add("checkedButton");
  newDiv.appendChild(checkedButton);
  newDiv.appendChild(deleteButton);
  deleteButton.innerHTML = '<img src="images/bin.png" alt="">';
  checkedButton.innerHTML = '<img src="images/done.png" alt="">';
  inputField.value = "";
  arr.push(newDiv);
  checkedButton.addEventListener("click", function (e){tasksChecked (toDoList,newDiv)} );

  deleteButton.addEventListener("click",removeTask);
}
    function removeTask(e){
    const item = e.target;
console.log(item);
    item.parentElement.remove();
}
function tasksChecked(toDoList,newDiv){

   newDivArr.push(toDoList);

      if (counter2 <= 5) {
        const tasksDone = document.createElement("div");
        tasksDone.classList.add("tasksDone");
        tasksDone.setAttribute("id", "tasksDone" + checkedTasks.length);
        checkedTasks.appendChild(tasksDone);
        newDivArr.pop();
        newDiv.remove();
        counter2++;
      } else {
        alert("List of completed tasks is full");
      }
    
}

