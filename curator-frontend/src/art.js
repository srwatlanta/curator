const artDiv = document.getElementById("art-img-div")
const searchBar = document.getElementById("art-search-input")
const submitButton = document.getElementById("art-search-submit")
const artSearch = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=/"
const artSet = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

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
    artDiv.innerHTML = ""
    artDiv.innerHTML = `
    <img src="${painting.primaryImage}" width="80%" class="uk-img uk-align-center">
    <h3 class="uk-align-center">Title: ${painting.title}</h3>
    <p class="uk-align-center">Year: ${painting.objectBeginDate}</p>
    `
}

const randomNum = (length) => {
    return Math.floor(Math.random() * length)
}