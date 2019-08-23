//BACKGROUND CONSTANTS
let backgroundArray = []
let body = document.querySelector("body")

//READ
const setBackground = (array) => {
    let bgNum = randomNum(array.length)
    body.style.backgroundImage = `url('${array[bgNum].url}')`
    console.log(array[bgNum].url)
}