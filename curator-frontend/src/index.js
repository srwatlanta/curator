//GLOBAL CONSTANTS
const usersURL = `http://localhost:3000/users/`
let userId = 1

//RUN PAGE
const fetchUser = () => {
    fetch(usersURL + userId)
    .then(res => res.json())
    .then(data => {
        setUser(data.username)
        setNavBar()

        data.to_dos.forEach(task => createLi(task))

        data.flash_cards.forEach(card => flashCardArray.push(card))
        flashCardCount = 0
        renderCard(flashCardArray[flashCardCount])
        
        data.videos.forEach(video => videoArray.push(video))
        videoCount = 0
        renderVideo(videoArray[videoCount])

        data.backgrounds.forEach(background => backgroundArray.push(background))
        setBackground(backgroundArray)
    })
}

//FUNCTION CALLS 
fetchUser()
searchFetch()
quoteFetch()