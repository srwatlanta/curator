
//Global Variables 
    const usersURL = `http://localhost:3000/users/1`
    const taskList = document.getElementById("tasks-list")

        //READ
        function getTasks(){
        fetch(`http://localhost:3000/users/1`)
        .then(res => res.json())
        .then(data => iterateOverTasks(data))
        }

        function iterateOverTasks(data){
            data.to_do.forEach(task =>(renderTask(task))) 
        }

        function renderTask(task) {
          
            let li =  document.createElement("li")
            let h3 = document.createElement("h4") //item name 
            let p = document.createElement("p")//comment note 
            let editButton = document.createElement("button")
            let completeButton = document.createElement("button")
            let deleteButton = document.createElement("button")

            completeButton.innerText = "like"
            editButton.innerText = "edit"
            deleteButton.innerText = "delete"
            
            h3.innerText = task.item
            
            p.innerText = task.comment 

            li.append(h3, p, completeButton, editButton, deleteButton)

            completeButton.addEventListener("click", (event))
            editButton.addEventListener("click", (event))
            deleteButton.addEventListener("click", (event))

            taskList.append(li)
    
        renderTask()
        }

        // function addATask(){
        //     fetch(usersURL, {
        //     method: "POST", 
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json",
        //     },
        //     body: JSON.stringify({formData})
        
        //     }).then(res => res.json())
        // .then(task => renderTask(task))
        // }
        
        // renderTask()
     
