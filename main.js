const addButton= document.querySelector('.addButton');
const container= document.querySelector('.container');
const inputField= document.querySelector('.inputField');
const wrapper= document.querySelector('.wrapper');
let counter =0;
const arr =[]


//making new div with paragraph inside, adding classes and pushing both into div-wrapper
addButton.addEventListener('click',function(){
    const newDiv= document.createElement('div');
    newDiv.classList.add('newDiv');
    wrapper.appendChild(newDiv);
    const toDoList= document.createElement('li');
    toDoList.classList.add('toDoList')
    newDiv.appendChild(toDoList);
    arr.push(newDiv);
    toDoList.innerHTML= inputField.value;
    
    

    
    const checkedButton= document.createElement('button')
    const deleteButton= document.createElement('button')
    deleteButton.classList.add('deleteButton');
    checkedButton.classList.add('checkedButton')
    newDiv.appendChild(checkedButton);
    newDiv.appendChild(deleteButton);
    
   
    deleteButton.setAttribute('id',counter);
    
    counter++
   
    
    deleteButton.innerHTML='<img src="images/bin.png" alt="">'
    
    checkedButton.innerHTML= '<img src="images/done.png" alt="">'
    render()
    checkedButton.addEventListener('click',function(e){
        toDoList.classList.toggle('active');
    })

//delete-button listener
deleteButton.addEventListener('click',function(e){
    console.log(e.target) 
    const index=e.target.id;
     arr[index]=null;


     
     render()
     
})
})

function render(){
wrapper.innerHTML='';

for(i=0;i<arr.length;i++){
    if(arr[i]!==null){
    wrapper.appendChild(arr[i]);
}
}
}

