const quoteDiv = document.getElementById("quote-content-div")
const quoteUrl = "http://quotes.rest/qod.json?category=inspire"

const quoteFetch = () => {
    fetch(quoteUrl)
    .then(res => res.json())
    .then(quoteItem => {
        let quote = quoteItem.contents.quotes[0].quote
        let author = quoteItem.contents.quotes[0].author
        renderQuote(quote, author)
    })
}

const renderQuote= (quote, author) => {
    let inner = `
    <p>${quote}</p>
    <p class="author" >-<em>${author}</em></p>
    `
    quoteDiv.innerHTML = inner
}