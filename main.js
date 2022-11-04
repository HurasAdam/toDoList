const addButton= document.querySelector('.addButton');
const container= document.querySelector('.container');
const inputField= document.querySelector('.inputField');
const wrapper= document.querySelector('.wrapper');
let counter =0;
const arr =[]
const arr2=[]
addButton.addEventListener('click',function(){
    const newDiv= document.createElement('div');
    wrapper.appendChild(newDiv);

   
    newDiv.classList.add('newDiv');
    arr2.push(newDiv);
    const deleteButton= document.createElement('button')
    
    const paragraph= document.createElement('p');
    paragraph.classList.add('todo-paragraph')
    newDiv.appendChild(paragraph);
    deleteButton.classList.add('deleteButton')
    deleteButton.setAttribute('id',counter);
    arr.push(deleteButton);
    counter++


   
    // deleteButton.innerHTML='<img src="images/bin2.png" alt="">'
    
   
    newDiv.appendChild(deleteButton);
    paragraph.innerHTML= inputField.value;
    
    render()


deleteButton.addEventListener('click',function(e){
     const index=e.target.id;
     arr2[index]=null;

     render()
     
    
  
})
})


function render(){
wrapper.innerHTML='';

for(i=0;i<arr2.length;i++){
    if(arr2[i]!==null){
    wrapper.appendChild(arr2[i]);
}
}

}