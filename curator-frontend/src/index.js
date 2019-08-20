// import { setPriority } from "os";

const usersURL = `http://localhost:3000/users/1`

const flashCardUrl = "http://localhost:3000/flash_cards"
const nextFlashCard = document.getElementById("next-flash-card")
const newFlashCardForm = document.getElementById("new-flash-card-form-container")
const flashCardDiv = document.getElementById("card-answer-div")
const deleteFlashCard = document.getElementById("delete-flash-card")
let flashCardCount
let flashCardArray = []

const videoUrl = "http://localhost:3000/video"
const nextVideo = document.getElementById("next-flash-card")
const newVideoForm = document.getElementById("new-flash-card-form-container")
const videoDiv = document.getElementById("card-answer-div")
const deleteVideo = document.getElementById("delete-flash-card")
let videoCount
let videoArray = []

   //READ
const fetchToDoList = () => {
    fetch(usersURL)
    .then(res => res.json())
    .then(data => {
        data.to_dos.forEach(createLi)
        data.flash_cards.forEach(card => flashCardArray.push(card))
        data.videos.forEach(video => videoArray.push(video))
        flashCardCount = 0
        renderCard(flashCardArray[flashCardCount])
    })
}

function createLi(task){

    const list = document.getElementById("tasks-list")
    let li = document.createElement("li")
    li.className = "task-li"
    li.id = `to_dos.id`

    let taskDiv = document.createElement("div")
    taskDiv.className = "uk-width-4-5"

    let strongspan = document.createElement("span") //item name 
    strongspan.innerHTML = `<strong>${task.item}</strong>`
    let span = document.createElement("span")//comment note 
    span.innerText = `   ${task.comment}`
    span.className = "uk-text-meta"
    
    let buttonDiv = document.createElement("div")
    buttonDiv.className = "uk-button-group"
    taskDiv.className = "list-item-menu"

    let editButton = document.createElement("button")
    editButton.addEventListener("click", () => editTask(event, task))
    editButton.innerText = "edit"
    editButton.className = "edit-button"
    editButton.innerHTML = 
    `
    <li>
       <div class="list-item-menu">
           <a class="edit-button" uk-toggle="target: #edit-form-container" uk-icon= "icon: pencil"></a>
       </div> 
   </li> 
       `
    
    let doneButton = document.createElement("button")
    doneButton.addEventListener("click", () => finishTask(event, task))
    doneButton.innerText = "finished"
    doneButton.className = "done-button"
    doneButton.innerHTML = 
    `
    <li>
       <div class="list-item-menu">
           <a class="done-button" uk-toggle="target: #edit-form-container" uk-icon= "icon: check"></a>
       </div> 
   </li> 
       `

    let deleteButton = document.createElement("button")
    deleteButton.addEventListener("click", () => deleteTask(event, task))
    deleteButton.innerText = "delete"
    deleteButton.className = "delete-button"
    deleteButton.innerHTML = 
    `
    <li>
       <div class="list-item-menu">
           <a class="delete-button" uk-toggle="target: #tasks-list" uk-icon= "icon: trash "></a>
       </div> 
   </li> 
       `

    let priorityDropDown = document.createElement("button")
    priorityDropDown.addEventListener("click", () => setPriority(event, task))
    priorityDropDown.innerHTML = 
    `
    <div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Priority</button>
    <div uk-dropdown="pos: right-center">
        <ul class="uk-nav uk-dropdown-nav">
            <li><a href="#">High</a></li>
            <li><a href="#">Medium</a></li>
            <li><a href="#">Low</a></li>
        </ul>
    </div>
</div>
    `

    buttonDiv.append(editButton, doneButton, deleteButton, priorityDropDown)
    taskDiv.append(strongspan, span)

    li.append(taskDiv, buttonDiv)
    list.append(li) 
}

function deleteTask(event, id ){
    let li = document.getElementById(task.id)
    li.remove()
    fetch(usersURL, {
        method: "DELETE"
    })
}


//FUNCTION CALLS 
fetchToDoList()


const renderCard = (card) => {  
    let answerDiv = document.getElementById("card-answer-div")
    answerDiv.innerHTML = `<p class="uk-heading-small uk-position-center">${card.answer}</h3>`

    let clueDiv = document.getElementById("card-clue-div")
    clueDiv.innerHTML = `<p class="uk-heading-medium uk-position-center">${card.clue}</h1>`
}

const nextCard = () => {
    flashCardDiv.innerHTML = ""
    ++flashCardCount
    if(flashCardCount >= flashCardArray.length){
        flashCardCount = 0
    }
    renderCard(flashCardArray[flashCardCount])
}

const newCard = (event) => {
    event.preventDefault()
    fClue = document.getElementById("flash-clue")
    fAnswer = document.getElementById("flash-answer")
    newCardFetch(fClue, fAnswer)
    fClue.value = ""
    fAnswer.value = ""
}

const newCardFetch = (fClue, fAnswer) => {
    fetch(flashCardUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify({
            user_id: 1,
            clue: fClue.value,
            answer: fAnswer.value
        })
    })
    .then(res => res.json())
    .then(card => flashCardArray.push(card))
}

const deleteFetch = () => {
    fetch(flashCardUrl + '/' + flashCardArray[flashCardCount].id, {
    method: "DELETE"
    })
    .then(flashCardArray.splice(flashCardCount, 1))
    .then(nextCard())
}

nextFlashCard.addEventListener("click", () => nextCard())
newFlashCardForm.addEventListener("submit", () => newCard(event))
deleteFlashCard.addEventListener("click", () => deleteFetch())
    
