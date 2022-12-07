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

const gameState= {
 arr:  [],
 newDivArr:[],
 counter2 : 0,
}

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
  const tooltipSpan = document.createElement("span");
  tooltipSpan.classList.add("tooltipSpan");
  tooltipSpan.innerText = "Doubleclick to edit";

  newTaskAudio.play();
  newDiv.setAttribute("id", "div" + gameState.arr.length);
  wrapper.appendChild(newDiv);

  newDiv.appendChild(tooltipSpan);
  if (gameState.arr.length >= 9) {
    const fullBoard =
      "List of tasks is full, remove old tasks before add new one ";
    showPopup(fullBoard);
    return;
  }

  if (gameState.arr.length % 2 === 0) {
    newDiv.classList.add("rotateRight");
  } else {
    newDiv.classList.add("rotateLeft");
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
  gameState.arr.push(newDiv);

  //(delete,check) buttons listeners
  checkedButton.addEventListener("click", tasksChecked);
  deleteButton.addEventListener("click", removeTask);

  clearBoardButton.addEventListener("click", removeAllTasks);

  //removing single task
  function removeTask(e) {
    removeTaskAudio.play();
    const item = e.target;
    newDiv.classList.add("fall");
    newDiv.addEventListener("transitionend", function () {
      item.parentElement.remove();
      gameState.arr.pop();
    });
  }

  //setting task as done
  function tasksChecked(e) {
    checkmarkAudio.play();
    gameState.newDivArr.push(toDoList);
    const item = e.target;
    newDiv.classList.toggle("line-thru");
  }
}

//generate popup msg
function showPopup(popupAlert) {
  popupAudio.play();
  wrapper.classList.add("active");
  popup.classList.add("active");
  popupTxt.classList.add("active");
  popupButton.classList.add("active");
  popup.appendChild(popupTxt);
  popupTxt.textContent = popupAlert;
}

//popup accept buton
function popupAccept() {
  wrapper.classList.remove("active");
  popupButton.classList.remove("active");
  popup.classList.remove("active");
  popupTxt.innerHTML = "";
}

//removing all tasks
function removeAllTasks() {
  gameState.arr.forEach(function (item) {
    item.remove();
    clearBoardAudio.play();
  });
  gameState.arr.splice(0, gameState.arr.length);
}
popupButton.addEventListener("click", popupAccept);


function setGameState(){


const state= localStorage.setItem('state',JSON.stringify(gameState));


}


function getGameState(){

const result = JSON.parse(localStorage.getItem('state'))
console.log(result.arr);

}