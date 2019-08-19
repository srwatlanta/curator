document.addEventListener("DOMContentLoaded", function (){
   
    //Global Variables 
    const usersURL = `http://localhost:3000/users`

        //READ
        fetch(usersURL)
        .then(res => res.json())
        .then(data => iterateOverTasks(ToDo))

        function iterateOverTasks(tasks){
            tasks.forEach(task => {

            const list = document.getElementById("tasks-list")

            let li =  document.createElement("li")
            let h3 = document.createElement("h4") //item name 
            let p = document.createElement("p")//comment note 
            let editButton = document.createElement("button")
            let doneButton = document.createElement("button")
            let deleteButton = document.createElement("button")

            likeButton.innerText = "like"
            editButton.innerText = "edit"
            deleteButton.innerText = "delete"
            h3.innerText = to_do.item 
            p.innerText = to_do.comment 

            li.append(h2,p,likeButton, editButton, deleteButton)
            likeButton.addEventListener("click", (event))
            editButton.addEventListener("click", (event))
            deleteButton.addEventListener("click", (event))

            tasksCollection.append(li)

            li.addEventListener("click", (event) => addATask(user))  
            })
        }
})
//     //READ 
//          
    
//     function iterateOverToDos(tasks){
//          tasks.forEach(tasks => {
            
//             const tasksPanel = document.createElement("div")
//             const list = document.getElementById("list")
//             let li =  document.createElement("li")
//             let h4 = document.createElement("h4")
        
//             h4.innerText = book.title 
//             li.append(h4)
//             listPanel.append(li)
    
    
//             li.addEventListener("click", (event) => bookDetails(books))
    
//             function bookDetails(book){
//             const showPanel = document.getElementById("show-panel")
//                 let li =  document.createElement("li")
//                 let img = document.createElement("img")
//                 img.src = book.img_url
//                 let p = document.createElement("p")
//                     p.innerText = book.description
//                 li.append(img,p)
//                 showPanel.append(li)
//             }
    
            
//            //Event Listener-When clicked the book's description and image should appear. The BookDetails function should also have a like button for users.
                
//         })
    
//       }
//     })  
    
