//TASK CONSTANTS
const taskUrl = "http://localhost:3000/to_dos"
const taskList = document.getElementById("tasks-list")
const editTaskForm = document.getElementById("edit-task-form-container")
const editTaskSubmit = document.getElementById("edit-button")
const editTaskItem = document.getElementById("edit-task-name")
const editTaskComment = document.getElementById("edit-task-comment")
const editTaskPriority = document.getElementById("edit-priority")
const newTaskForm = document.getElementById("new-task-form-container")
const newTaskItem = document.getElementById("new-task-name")
const newTaskComment = document.getElementById("new-task-comment")
const newTaskPriority = document.getElementById("new-task-priority")
const newTaskSubmit = document.getElementById("new-task-button")
let taskId
let editId

//READ
const createLi = (task) => {
    let li = document.createElement("li")
    li.className = "task-li"
    li.id = `task-${task.id}`
    li.setAttribute("complete", "false")

    li.innerHTML = `
    <div class="list-item-menu">
        <span><strong>${task.item}</strong></span>
        <span class="uk-text-meta">${task.comment}</span>
    </div>
    <div class="uk-button-group">
        <div class="uk-inline">
            <button class="button-${task.urgency}" type="button">${task.urgency}</button>
            <div class="uk-align-right">
                <a id="finish-task-button-${task.id}" class="uk-icon" uk-icon="icon: check"></a>
                <a id="edit-task-button-${task.id}" class="uk-icon" uk-toggle="target: #edit-task-form-container" uk-icon="icon: pencil"></a>
                <a id="delete-task-button-${task.id}" class="uk-icon" uk-icon="icon: trash"></a>
            </div>
        </div>
    </div>
    `
    taskList.appendChild(li)


    let checkButton = document.getElementById(`finish-task-button-${task.id}`)
    checkButton.addEventListener("click", () => completeTask(event, task.id))
    let editTaskButton = document.getElementById(`edit-task-button-${task.id}`)
    editTaskButton.addEventListener("click", () => setEditId(task))
    let deleteTaskButton = document.getElementById(`delete-task-button-${task.id}`)
    deleteTaskButton.addEventListener("click", () => deleteTask(task))
}

const completeTask = (event, id) => {
    let line =document.getElementById(`task-${id}`)
    let lineText = line.querySelectorAll("span")
    let complete = line.getAttribute("complete")
    if(complete == "false"){
        lineText.forEach(line => line.className = "line-through")
        line.setAttribute("complete", "true")
    }else{
        lineText.forEach(line => line.classList.remove("line-through"))
        line.setAttribute("complete", "false")
    }
}

//UPDATE
const setEditId = (task) => {
    editTaskItem.value = task.item
    editTaskComment.value = task.comment
    editId = task.id
}

const patchTask = (event) => {
    fetch(taskUrl + '/' + editId, {
        method: "PATCH",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify ({
            item: editTaskItem.value,
            comment: editTaskComment.value,
            urgency: editTaskPriority.value
        })
    })
}

//CREATE
const createTask = event => {
    fetch(taskUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify ({
            user_id: userId,
            item: newTaskItem.value,
            comment: newTaskComment.value,
            urgency: newTaskPriority.value
        })
    })
}

//DELETE
const deleteTask = (task) => {
    fetch(taskUrl + '/' + task.id, {
        method: "DELETE"
    })
    .then(removeLine(task.id))
}

const removeLine = (id) => {
    let line = document.getElementById(`task-${id}`)
    line.remove()
}

//EVENT LISTENERS
newTaskForm.addEventListener("submit", () => createTask(event))
editTaskForm.addEventListener("submit", () => patchTask(event))