const flashCardUrl = "http://localhost:3000/flash_cards"
const nextFlashCard = document.getElementById("next-flash-card")
const newFlashCardForm = document.getElementById("new-flash-card-form-container")
const flashCardDiv = document.getElementById("card-answer-div")
const deleteFlashCard = document.getElementById("delete-flash-card")
let flashCardCount
let flashCardArray = []

const renderCard = (card) => {  
    let answerDiv = document.getElementById("card-answer-div")
    answerDiv.innerHTML = `<p class="uk-heading-small uk-position-center">${card.answer}</h3>`

    let clueDiv = document.getElementById("card-clue-div")
    clueDiv.innerHTML = `<p class="uk-heading-medium uk-position-center">${card.clue}</h1>`
}

const nextCard = () => {
    flashCardDiv.innerHTML = ""
    ++flashCardCount
    if(flashCardCount >= flashCardArray.length){
        flashCardCount = 0
    }
    renderCard(flashCardArray[flashCardCount])
}

const newCard = (event) => {
    event.preventDefault()
    fClue = document.getElementById("flash-clue")
    fAnswer = document.getElementById("flash-answer")
    newCardFetch(fClue, fAnswer)
    fClue.value = ""
    fAnswer.value = ""
}

const newCardFetch = (fClue, fAnswer) => {
    fetch(flashCardUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify({
            user_id: 1,
            clue: fClue.value,
            answer: fAnswer.value
        })
    })
    .then(res => res.json())
    .then(card => flashCardArray.push(card))
}

const deleteFetch = () => {
    fetch(flashCardUrl + '/' + flashCardArray[flashCardCount].id, {
    method: "DELETE"
    })
    .then(flashCardArray.splice(flashCardCount, 1))
    .then(nextCard())
}

nextFlashCard.addEventListener("click", () => nextCard())
newFlashCardForm.addEventListener("submit", () => newCard(event))
deleteFlashCard.addEventListener("click", () => deleteFetch())
    
