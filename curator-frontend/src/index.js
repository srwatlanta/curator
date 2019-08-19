document.addEventListener("DOMContentLoaded", function (){
   
    //Global Variables 
    const usersURL = `http://localhost:3000/users/1`
    const taskList = document.getElementById("tasks-list")

        //READ
        fetch(usersURL)
        .then(res => res.json())
        .then(data => iterateOverTasks(data))

        function iterateOverTasks(ToDo){
            ToDo.forEach(task => {

            const list = document.getElementById("tasks-list")

            let li =  document.createElement("li")
            let h3 = document.createElement("h4") //item name 
            let p = document.createElement("p")//comment note 
            let editButton = document.createElement("button")
            let completeButton = document.createElement("button")
            let deleteButton = document.createElement("button")

            completeButton.innerText = "like"
            editButton.innerText = "edit"
            deleteButton.innerText = "delete"
            h3.innerText = To_Do.item 
            p.innerText = to_do.comment 

            li.append(h2,p, completeButton, editButton, deleteButton)
            completeButton.addEventListener("click", (event))
            editButton.addEventListener("click", (event))
            deleteButton.addEventListener("click", (event))

            taskList.append(li)
 
            })
        }

            // li.addEventListener("click", (event) => addATask(user)) 
})

    
