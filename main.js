const newTaskAudio = new Audio();
newTaskAudio.src = "sound/scribble.mp3";
const checkmarkAudio = new Audio();
checkmarkAudio.src = "sound/check.mp3";
const removeTaskAudio = new Audio();
removeTaskAudio.src = "sound/paper-rip.mp3";
const clearBoardAudio = new Audio();
clearBoardAudio.src = "sound/clearBoard.mp3";
const popupTxt = document.querySelector(".popupTxt");
const popupButton = document.querySelector(".popupButton");
const popup = document.querySelector(".popupContainer");
const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");
const inputField = document.querySelector(".inputField");
const wrapper = document.querySelector(".wrapper");
const checkedTasks = document.querySelector(".checkedTasks");
const newDivArr = [];
const arr = [];

let counter2 = 0;

inputField.addEventListener("click", function () {
  inputField.placeholder = "";
});
addButton.addEventListener("click", createTask);

function createTask() {
  if (inputField.value === "") {
    const emptyTask = "You can not create an empty task";
    showPopup(emptyTask);
    return;
  }

  const newDiv = document.createElement("div");
  newTaskAudio.play();
  newDiv.setAttribute("id", "div" + arr.length);
  wrapper.appendChild(newDiv);
  if (arr.length >= 9) {
    const fullBoard = "List is full, remove old tasks before add new one ";
    showPopup(fullBoard);
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
    removeTaskAudio.play();
    const item = e.target;
    console.log(item);
    newDiv.classList.add("fall");
    newDiv.addEventListener("transitionend", function () {
      item.parentElement.remove();
      arr.pop();
    });
  }
  function tasksChecked(e) {
    checkmarkAudio.play();
    newDivArr.push(toDoList);
    const item = e.target;
    newDiv.classList.toggle("line-thru");
  }
}

function showPopup(popupAlert) {
  wrapper.classList.toggle("active");
  popup.classList.add("active");
  popupTxt.classList.toggle("active");
  popupButton.classList.add("active");
  popup.appendChild(popupTxt);
  popupTxt.textContent = popupAlert;
}

function popupAccept() {
  wrapper.classList.toggle("active");
  popupButton.classList.remove("active");
  popup.classList.remove("active");

  popupTxt.innerHTML = "";
}

popupButton.addEventListener("click", popupAccept);

const clearBoardButton = document.querySelector(".clearBoard");

clearBoardButton.addEventListener("click", function () {
  arr.forEach(function (item) {
    item.remove();

    clearBoardAudio.play();
  });
  arr.splice(0, arr.length);
});
