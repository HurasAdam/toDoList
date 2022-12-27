const newTaskAudio = new Audio();
newTaskAudio.src = "sound/scribble.mp3";
const checkmarkAudio = new Audio();
checkmarkAudio.src = "sound/check.mp3";
const removeTaskAudio = new Audio();
removeTaskAudio.src = "sound/paper-rip.mp3";
const clearBoardAudio = new Audio();
clearBoardAudio.src = "sound/clearBoard.mp3";
const popupAudio = new Audio();
popupAudio.src = "sound/popup.mp3";
const popupTxt = document.querySelector(".popupTxt");
const popupButton = document.querySelector(".popupButton");
const popup = document.querySelector(".popupContainer");
const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");
const inputField = document.querySelector(".inputField");
const wrapper = document.querySelector(".wrapper");
const checkedTasks = document.querySelector(".checkedTasks");
const clearBoardButton = document.querySelector(".clearBoard");
const popupBox = document.querySelector(".popup-Box");

const gameState = {
  arr: [],
  newDivArr: [],
};

inputField.addEventListener("click", function () {
  inputField.placeholder = "";
});
addButton.addEventListener("click", createTask);

function createTask() {
  if (!inputField.value) {
    const emptyTask = "You can not create an empty task";
    return showPopup(emptyTask);
  }

  const newDiv = document.createElement("div");

  const tooltipSpan = document.createElement("span");
  tooltipSpan.classList.add("tooltipSpan");
  tooltipSpan.innerText = "Doubleclick to edit";
  gameState.arr.push(newDiv);

  newTaskAudio.play();
  newDiv.setAttribute("id", gameState.arr.length);
  wrapper.appendChild(newDiv);

  newDiv.appendChild(tooltipSpan);
  if (gameState.arr.length >= 25) {
    newTaskAudio.pause();
    const fullBoard =
      "List of tasks is full, remove old tasks before add new one ";

    showPopup(fullBoard);
    return;
  }

  if(gameState.arr.length<=7<=14){
  if (gameState.arr.length % 2 === 0) {
    newDiv.classList.add("rotateRight");
  } else {
    newDiv.classList.add("rotateLeft");
  }
}

else if(gameState.arr.length>=7){
  if (gameState.arr.length % 2 === 0) {
    newDiv.classList.add("rotateLeft");
  } else {
    newDiv.classList.add("rotateRight");
  }
}
  const toDoList = document.createElement("span");
  toDoList.classList.add("Rotate");
  toDoList.setAttribute("id", gameState.arr.length);
  newDiv.appendChild(toDoList);

  toDoList.addEventListener("mouseover", function () {
    tooltipSpan.classList.add("active");
  });

  toDoList.addEventListener("mouseout", function () {
    tooltipSpan.classList.remove("active");
  });

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

  //(delete,check) buttons listeners
  checkedButton.addEventListener("click", tasksChecked);
  deleteButton.addEventListener("click", removeTask);

  clearBoardButton.addEventListener("click", removeAllTasks);

  //Remove Single Task 
  function removeTask(e) {
    removeTaskAudio.play();
    const item = e.target;
    newDiv.classList.add("fall");
    newDiv.addEventListener("transitionend", function () {
      item.parentElement.remove();
      gameState.arr.pop();
    });
  }

  //Set Task as Done
  function tasksChecked(e) {
    checkmarkAudio.play();
    gameState.newDivArr.push(toDoList);
    const item = e.target;
    newDiv.classList.toggle("line-thru");
  }
}

//Enable Popup
function showPopup(popupAlert) {
  const popupScreen= document.querySelector('.popup-screen')
  popupAudio.play();
  popupScreen.classList.add('active')
  popup.classList.add("active");
  popup.classList.add("active");
  popupTxt.classList.add("active");
  popupButton.classList.add("active");
  popup.appendChild(popupTxt);
  disableContent();
  popupTxt.textContent = popupAlert;
}

//Disable/Enable Task Buttons
function disableContent() {
  gameState.arr.forEach((el) => {
    const children = Array.from(el.children);
    const childrenButtons = children.filter((children) => {
      return children.nodeName === "BUTTON";
    });

    childrenButtons.forEach((button) => {
      if (popup.classList.contains("active")) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    });
  });
}

//Disable Popup
function popupAccept() {
  popup.classList.remove("active");
  popupButton.classList.remove("active");
  popup.classList.remove("active");
  popupTxt.innerHTML = "";
  disableContent();
}

//Remove All Tasks
function removeAllTasks() {
  gameState.arr.forEach(function (item) {
    clearBoardAudio.play();
    item.classList.add("fall");
    item.addEventListener("transitionend", function () {
      item.remove();
    });
  });
  gameState.arr.splice(0, gameState.arr.length);
}
popupButton.addEventListener("click", popupAccept);

function setGameState() {
  const state = localStorage.setItem("state", JSON.stringify(gameState));
}

function getGameState() {
  const result = JSON.parse(localStorage.getItem("state"));
  console.log(result.arr);
}
