let taskId
const taskList = document.getElementById("tasks-list")

function createLi(task){

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
    editButton.addEventListener("click", ()=> setId(task))
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
    <button class="uk-button uk-button-default uk-button-small" type="button">Priority</button>
    <div uk-dropdown="pos: left-center">
        <ul class="uk-nav uk-dropdown-nav">
            <li><a href="#">High</a></li>
            <li><a href="#">Medium</a></li>
            <li><a href="#">Low</a></li>
        </ul>
    </div>
</div>
    `

    buttonDiv.append(priorityDropDown, editButton, doneButton, deleteButton)
    taskDiv.append(strongspan, span)

    li.append(taskDiv, buttonDiv)
    taskList.append(li) 
}
    
function deleteTask(event, task){
 const list = document.getElementById("tasks-list")
 const li4removal = document.getElementById("to_dos.id")
    li4removal.parentNode.removeChild(li4removal)
    fetch(`http://localhost:3000/to_dos/${task.id}`,{
    method: "delete"
    })
}


function setId(task){
    taskId = task.id
}

    const submitEditForm = document.getElementById("edit-task-form")
    submitEditForm.addEventListener('submit', () => editTask(event))

    const editTask = (event) => {
    event.preventDefault()
    const editTaskURL = `http://localhost:3000/to_dos`
    let editTaskName = document.getElementById("edit-task-name")
    let editTaskComment = document.getElementById("edit-task-comment")
    let editTaskUrgency = document.getElementById("edit-priority")
    fetch(`http://localhost:3000/to_dos/${taskId}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json", 
            "Accept": "application/json"
        },
        body: JSON.stringify({
            item: editTaskName.value, 
            comment: editTaskComment.value,
            urgency: editTaskUrgency.value
        })
    })
}




    const submitNewTaskForm = document.getElementById("new-task-form")
    submitNewTaskForm.addEventListener('submit', () => createTask(event))

        
    const createTask = (event) => {
        event.preventDefault()
        let newTaskName = document.getElementById("task-name")
        let newTaskComment = document.getElementById("task-comments")
        let newTaskUrgency = document.getElementById("priority")
        fetch(`http://localhost:3000/to_dos`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                item: newTaskName.value, 
                comment: newTaskComment.value,
                urgency: newTaskUrgency.value
            })
            
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    

    // const finishTask = (event,task)
    // //should strikethrough the task upon click 

    // const li4strikethrough = document.getElementById("to_dos.id")
    // .addEventListener("click", () => (ev




