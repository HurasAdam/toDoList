const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");
const inputField = document.querySelector(".inputField");
const wrapper = document.querySelector(".wrapper");
const checkedTasks = document.querySelector(".checkedTasks");
const newDivArr = [];
const arr = [];

let counter2 = 0;

inputField.addEventListener("click", function () {
  inputField.value = "";
});
addButton.addEventListener("click", createTask);



function createTask() {

  if(inputField.value===''){
    alert('You can not create empty task');
    return;
  }

  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "div" + arr.length);
  wrapper.appendChild(newDiv);
  if (arr.length >= 9) {
    alert("List is full, remove old tasks before add new one ");

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

  toDoList.addEventListener("click", function (e) {
    const item = e.target;
    item.setAttribute("contentEditable", true);
  });

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

  //(delete,check) buttons listeners
  checkedButton.addEventListener("click", tasksChecked);
  deleteButton.addEventListener("click", removeTask);

  //removing tasks
  function removeTask(e) {
    const item = e.target;
    console.log(item);
    newDiv.classList.add("fall");
    newDiv.addEventListener("transitionend", function () {
      item.parentElement.remove();
      arr.pop();
    });
  }
  function tasksChecked(e) {
    newDivArr.push(toDoList);
    const item = e.target;
    newDiv.classList.toggle("line-thru");
  }
}

// function setInputValue() {
//   inputField.value = "add your task";
// }

// document.onload = setInputValue();
