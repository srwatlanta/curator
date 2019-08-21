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
    editButton.className = "edit-button"
    editButton.innerHTML = 
    `
    <li>
       <div class="list-item-menu">
           <a class="edit-button" uk-toggle="target: #edit-task-form-container" uk-icon= "icon: pencil"></a>
       </div> 
   </li> 
       `
    
    let doneButton = document.createElement("button")
    doneButton.addEventListener("click", () => finishTask(event, task))
    doneButton.className = "done-button"
    doneButton.innerHTML = 
    `
    <li>
       <div class="list-item-menu">
           <a class="done-button" uk-icon= "icon: check"></a>
       </div> 
   </li> 
       `

    let deleteButton = document.createElement("button")
    deleteButton.addEventListener("click", () => deleteTask(event, task))
    deleteButton.className = "delete-button"
    deleteButton.innerHTML = 
    `
    <li>
       <div class="list-item-menu">
           <a class="delete-button" uk-icon= "icon: trash "></a>
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

const editTask = (event, task) => {
    let editTaskName = document.getElementById("edit-task-name")
    let editTaskComment = document.getElementById("edit-task-comment")
    editTaskName.value = task.item
    editTaskComment.value = task.comment
}
