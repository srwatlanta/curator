const videoUrl = "http://localhost:3000/video"
const nextVideo = document.getElementById("next-video")
const newVideoForm = document.getElementById("new-video-form")
const videoDiv = document.getElementById("embed-video")
const deleteVideo = document.getElementById("delete-video")
let videoCount
let videoArray = []

const embeddabbleVideo = (url) => {
    let x = url.split("=")
    return "https://www.youtube.com/embed/" + x[1]
}