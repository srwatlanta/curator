const renderCard = (card) => {  
    let answerDiv = document.createElement("div")
    answerDiv.innerHTML = `
    <h3 class="uk-heading-small">${card.answer}</h3>
    `
    answerDiv.style.display = "none"
    answerDiv.addEventListener("click", () => flipCard(answerDiv))


    let clueDiv = document.createElement("div")
    clueDiv.innerHTML = `
    <h1 class="uk-heading-medium">${card.clue}</h1>
    `
    clueDiv.addEventListener("click", () => flipCard(answerDiv))
    
    flashCardDiv.append(clueDiv, answerDiv)
}

const flipCard = (div) => {
    if(div.style.display === "none") {
        div.style.display = ""
    } else {
        div.style.display = "none"
    }
}

const nextCard = () => {
    flashCardDiv.innerHTML = ""
    ++flashCardCount
    if(flashCardCount === flashCardArray.length){
        flashCardCount = 0
    }
    renderCard(flashCardArray[flashCardCount])
}

const newCard = (event) => {
    console.log(event.target.parentNode)
}

nextFlashCard.addEventListener("click", () => nextCard())
newFlashCard.addEventListener("click", () => newCardFetch(event))