document.addEventListener("DOMContentLoaded", function (){
    //1. Fetch User & Render to Page 
        //Fetch Request w/for each to render each to-do for the user 

    //Global Variables 
    
    const userURL = `http://localhost:3000/user`
    let tasksCollection = document.createElement("div")
    tasksCollection.className = "card"
    main.appendChild(tasksCollection)
})
//     //READ 
//          fetch
//             .then(res => res.json())
//             .then(userData => iterateOverToDos())
    
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
    
    
    
    

// const userURL =  `http://localhost:3000/user/1`