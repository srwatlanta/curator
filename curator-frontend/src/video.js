const videoUrl = "http://localhost:3000/videos"
const nextVideoButton = document.getElementById("next-video")
const newVideoForm = document.getElementById("new-video-form")
const videoDiv = document.getElementById("embed-video")
const deleteVideo = document.getElementById("delete-video")
let videoCount
let videoArray = []


const embeddabbleVideo = (url) => {
    let x = url.split("=")
    return "https://www.youtube.com/embed/" + x[1]
}

const renderVideo = (video) => {
    videoDiv.src = embeddabbleVideo(video.video_url)
}

const nextVideo = () => {
    videoDiv.src = ""
    ++videoCount
    if(videoCount >= videoArray.length){
        videoCount = 0
    }
    renderVideo(videoArray[videoCount])
}

const newVideo = (event) => {
    event.preventDefault()
    submitUrl = document.getElementById("submit-url")
    newVideoFetch(submitUrl.value)
    submitUrl.value = ""
}

const newVideoFetch = (submitUrl) => {
    fetch(videoUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify({
            user_id: 1,
            video_url: submitUrl
        })
    })
    .then(res => res.json())
    .then(video => videoArray.push(video))
}

const deleteVideoFetch = () => {
    fetch(videoUrl + '/' + videoArray[videoCount].id, {
    method: "DELETE"
    })
    .then(videoArray.splice(videoCount, 1))
    .then(nextVideo())
}



nextVideoButton.addEventListener("click", () => nextVideo())
newVideoForm.addEventListener("submit", () => newVideo(event))
deleteVideo.addEventListener("click", () => deleteVideoFetch())
    
