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
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    const img = document.createElement("img")


    img.src = painting.primaryImage
    img.style.width = "80%"
    img.className = "uk-img uk-align-center"

    p.innerText = `Year: ${painting.objectBeginDate}`
    p.className = "uk-align-center"

    h3.innerText = `Title: ${painting.title}`
    h3.className = "uk-align-center"

    artDiv.append(img, h3, p)
}

const randomNum = (length) => {
    return Math.floor(Math.random() * length)
}