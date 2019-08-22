let inactiveButton
const inactiveUserLi = document.getElementById("inactive-li")
const activeUserButton = document.getElementById("user-drop-active")
const activeUserLi = document.getElementById("active-li")
const userNavDisplay = document.getElementById("navbar-user-display")
const dropDown = document.getElementsByClassName("uk-navbar-dropdown")
let currentUser
let newUser


const switchUser = (newUser) => {
    if(newUser == "Ehawkins"){
        return userId = 2
    }else{
        return userId = 1
    }
}

const resetValues = () => {
    videoArray = []
    videoCount = 0
    flashCardArray = []
    flashCardCount = 0
    taskList.innerHTML = ""
}

const setUser = (username) => {
    if(username == "srwatlanta") {
        currentUser = "srwatlanta"
        newUser = "Ehawkins"
    } else {
        currentUser = "Ehawkins"
        newUser = "srwatlanta"
    }
}

const setNavBar = () => {
    inactiveUserLi.innerHTML = `<a id="user-drop-inactive" uk-icon="user" href="#">${newUser}</a>`
    activeUserLi.innerHTML = `<a id="user-drop-active" class="uk-active" uk-icon="user" href="#" uk>${currentUser}</a>`
    userNavDisplay.innerText = currentUser  
    inactiveButton = document.getElementById("user-drop-inactive")
    inactiveButton.addEventListener("click", () => resetStuff())         
}

const resetStuff = () => {
    // console.log("whastup")
    switchUser(newUser)
    resetValues()
    fetchUser()
}