const addButton= document.querySelector('.addButton');
const container= document.querySelector('.container');
const inputField= document.querySelector('.inputField');
const wrapper= document.querySelector('.wrapper');
const checkedTasks= document.querySelector('.checkedTasks');

const arr=[];
let counter=0;
const choice = document.querySelector('#choice');
//making new div and li wih classes and pushing both into div-wrapper
addButton.addEventListener('click',function(){

   
const newDiv= document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.setAttribute('id','div'+counter);

const toDoList= document.createElement('li');
toDoList.classList.add('toDoList')
toDoList.setAttribute('id', counter);
newDiv.appendChild(toDoList);

toDoList.innerHTML= inputField.value;
const checkedButton= document.createElement('button')
const deleteButton= document.createElement('button')
deleteButton.classList.add('deleteButton');
checkedButton.classList.add('checkedButton')
newDiv.appendChild(checkedButton);
newDiv.appendChild(deleteButton);
deleteButton.innerHTML='<img src="images/bin.png" alt="">'
checkedButton.innerHTML= '<img src="images/done.png" alt="">'
inputField.value='';
counter++

    
wrapper.appendChild(newDiv);

checkedButton.addEventListener('click',function(e){
        toDoList.classList.toggle('active');
        
   arr.push(toDoList);

   for(i=0;i<arr.length;i++){
const tasksDone= document.createElement('div');
tasksDone.classList.add('tasksDone');
tasksDone.setAttribute('id','tasksDone'+i);
checkedTasks.appendChild(tasksDone);
tasksDone.appendChild(arr[i]);
newDiv.remove();
toDoList.classList.remove('active');


 } })


deleteButton.addEventListener('click',function(e){
 
const item= e.target;

item.parentElement.remove();
     
})
})