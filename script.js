
const addToDoButton = document.querySelector('#addToDo')
const toDoContainer =document.querySelector('#toDoContainer')
const inputText = document.querySelector('#inputText')
const clearToDoButton = document.querySelector('#clearToDo')

addToDoButton.addEventListener('click', () => {
    //tıklandığında ne olsun 
    let paragraph = document.createElement('p')
    toDoContainer.appendChild(paragraph)
    paragraph.classList.add('paragraph-styleing')
    paragraph.innerHTML = inputText.value //inputun içindeki değeri aldı ve atadı
    inputText.value = ""

    paragraph.addEventListener('click', ()=>{
         paragraph.style.textDecoration = 'line-through'

    })

    paragraph.addEventListener('dblclick', ()=>{
        toDoContainer.removeChild(paragraph)
        
   })


   clearToDoButton.addEventListener('click' , ()=>{
    // paragraph.style.display = 'none'
    paragraph.remove()
})
    

})


