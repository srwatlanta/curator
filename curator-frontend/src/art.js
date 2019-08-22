const artImgDiv = document.getElementById("art-img-div")
const searchBar = document.getElementById("art-search-input")
const submitButton = document.getElementById("art-search-submit")
const artSearch = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=/"
const artSet = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
// const artSpan = document.getElementById('art-span')

submitButton.addEventListener("click", () => {
    event.preventDefault()
    query = searchBar.value
    searchFetch(event, query)
    searchBar.value = ""
})

const searchFetch = (event, query) => {
    fetch(artSearch + query)
    .then(res => res.json())
    .then(list => {
        let i = randomNum(list.total)
        id = parseInt((list.objectIDs[i]))
        fetch(artSet + id)
        .then(res => res.json())
        .then(painting => renderPainting(painting))
    })
}

const renderPainting = (painting) => {
    artImgDiv.innerHTML = ""
    artImgDiv.innerHTML = `
    <img id="paintingImage" src="${painting.primaryImage}" class="uk-img uk-align-center">
    <div class="overlay">
        <h3 class="">${painting.title}</h3>
        <p class="">Year: ${painting.objectBeginDate}</p>
    </div>
    `
}

const randomNum = (length) => {
    return Math.floor(Math.random() * length)
}