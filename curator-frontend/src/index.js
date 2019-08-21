const usersURL = `http://localhost:3000/users/1`

   //READ
const fetchUser = () => {
    fetch(usersURL)
    .then(res => res.json())
    .then(data => {
        data.to_dos.forEach(createLi)
        data.flash_cards.forEach(card => flashCardArray.push(card))
        flashCardCount = 0
        renderCard(flashCardArray[flashCardCount])
        data.videos.forEach(video => videoArray.push(video))
        videoCount = 0
        renderVideo(videoArray[videoCount])
    })
}

//FUNCTION CALLS 
fetchUser()