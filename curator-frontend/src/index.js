
const usersURL = `http://localhost:3000/users/`
let userId = 1

   //READ
const fetchUser = () => {
    fetch(usersURL + userId)
    .then(res => res.json())
    .then(data => {
        setUser(data.username)
        setNavBar()

        data.to_dos.forEach(createLi)
<<<<<<< HEAD
<<<<<<< HEAD
        // data.flash_cards.forEach(card => flashCardArray.push(card))
        // flashCardCount = 0
        // renderCard(flashCardArray[flashCardCount])
        // data.videos.forEach(video => videoArray.push(video))
        // videoCount = 0
        // // renderVideo(videoArray[videoCount])
=======
=======
>>>>>>> 26434f82ab329a7f65fc882aa7f678a95f698876

        data.flash_cards.forEach(card => flashCardArray.push(card))
        flashCardCount = 0
        renderCard(flashCardArray[flashCardCount])
        
        data.videos.forEach(video => videoArray.push(video))
        videoCount = 0
        renderVideo(videoArray[videoCount])
<<<<<<< HEAD

>>>>>>> fc3bb14afa3e8b0ff7c5a0c8bc5618925cfef290
=======
>>>>>>> 26434f82ab329a7f65fc882aa7f678a95f698876
    })
}

//FUNCTION CALLS 
fetchUser()
searchFetch()
quoteFetch()