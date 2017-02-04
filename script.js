var buttonElement = document.getElementById('my-first-button')

var audioElement = document.getElementById('audio')

buttonElement.addEventListener('click', function () {
  audioElement.play()
})
