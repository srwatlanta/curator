const usersURL = `http://localhost:3000/users/1`

   //READ
const fetchToDoList = () => {
    fetch(usersURL)
    .then(res => res.json())
    .then(data => {
        data.to_dos.forEach(createLi)
    })
}

function createLi(task){
    const list = document.getElementById("tasks-list")
    let li = document.createElement("li")

    let taskDiv = document.createElement("div")
    taskDiv.className = "uk-width-4-5"

    let strongspan = document.createElement("span") //item name 
    strongspan.innerHTML = `<strong>${task.item}</strong>`
    let span = document.createElement("span")//comment note 
    span.innerText = `   ${task.comment}`
    span.className = "uk-text-meta"
    
    let buttonDiv = document.createElement("div")
    taskDiv.className = "list-item-menu"

    let editButton = document.createElement("button")
    editButton.addEventListener("click", () => editTask(event, task))
    editButton.innerText = "edit"
    editButton.className = "edit-button"

    
    let doneButton = document.createElement("button")
    doneButton.addEventListener("click", () => finishTask(event, task))
    doneButton.innerText = "finished"
    doneButton.className = "done-button"

    
    let deleteButton = document.createElement("button")
    deleteButton.addEventListener("click", () => deleteTask(event, task))
    deleteButton.innerText = "delete"
    deleteButton.className = "delete-button"
    deleteButton.icon = "icon:trash"

    buttonDiv.append(editButton, doneButton, deleteButton)
    taskDiv.append(strongspan, span)

    li.append(taskDiv, buttonDiv)
    list.append(li)
}


//FUNCTION CALLS
fetchToDoList()

    
